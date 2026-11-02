import { NextResponse, type NextRequest } from "next/server"

// Step 1 of signing in to the site editor: send the editor to GitHub to approve access.
// Needs a GitHub OAuth app whose callback URL is https://www.destinyogwuche.com/api/decap/callback,
// with its credentials in GITHUB_OAUTH_CLIENT_ID and GITHUB_OAUTH_CLIENT_SECRET.

export function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID
  if (!clientId) {
    return new NextResponse("The site editor is not set up yet: GITHUB_OAUTH_CLIENT_ID is missing.", { status: 500 })
  }

  const state = crypto.randomUUID()
  const scope = request.nextUrl.searchParams.get("scope") || "repo"
  const redirectUri = new URL("/api/decap/callback", request.nextUrl.origin).toString()

  const authorize = new URL("https://github.com/login/oauth/authorize")
  authorize.searchParams.set("client_id", clientId)
  authorize.searchParams.set("redirect_uri", redirectUri)
  authorize.searchParams.set("scope", scope)
  authorize.searchParams.set("state", state)

  const response = NextResponse.redirect(authorize)
  response.cookies.set("decap_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/api/decap",
    maxAge: 600,
  })
  return response
}
