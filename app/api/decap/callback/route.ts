import { NextResponse, type NextRequest } from "next/server"

// Step 2 of signing in to the site editor: GitHub sends the visitor back here with a code,
// which is exchanged for an access token and handed to the editor window that opened the sign-in.

function reply(status: "success" | "error", content: Record<string, string>, origin: string) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`
  // The token is only ever posted to this site's own origin.
  const html = `<!doctype html><html><body><p>Signing you in…</p><script>
(function () {
  var origin = ${JSON.stringify(origin)};
  function receive(e) {
    if (e.origin !== origin) return;
    window.opener.postMessage(${JSON.stringify(message)}, origin);
    window.removeEventListener("message", receive, false);
  }
  window.addEventListener("message", receive, false);
  window.opener && window.opener.postMessage("authorizing:github", origin);
})();
</script></body></html>`
  return new NextResponse(html, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } })
}

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin
  const code = request.nextUrl.searchParams.get("code")
  const state = request.nextUrl.searchParams.get("state")
  const expected = request.cookies.get("decap_oauth_state")?.value

  if (!code || !state || !expected || state !== expected) {
    return reply("error", { message: "Sign-in could not be verified. Close this window and try again." }, origin)
  }

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET
  if (!clientId || !clientSecret) {
    return reply("error", { message: "The site editor is not set up yet: GitHub credentials are missing." }, origin)
  }

  try {
    const res = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: new URL("/api/decap/callback", origin).toString(),
      }),
    })
    const data = (await res.json()) as { access_token?: string; error_description?: string }
    if (!data.access_token) {
      return reply("error", { message: data.error_description || "GitHub did not return an access token." }, origin)
    }
    const response = reply("success", { token: data.access_token, provider: "github" }, origin)
    response.cookies.delete({ name: "decap_oauth_state", path: "/api/decap" })
    return response
  } catch {
    return reply("error", { message: "Could not reach GitHub. Close this window and try again." }, origin)
  }
}
