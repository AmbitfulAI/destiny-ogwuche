"use server"

import { transporter, mailOptions } from "@/lib/nodemailer"

// Sample-chapter and launch-list signups.
// If BUTTONDOWN_API_KEY is set, the subscriber is added to that newsletter list
// (Buttondown handles confirmation emails and unsubscribes). Otherwise the signup
// is emailed to the site owner through the existing ZeptoMail setup.

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string)

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type SubscribeResult = { success: true } | { success: false; error: string }

export async function subscribe(formData: {
  name: string
  email: string
  role: string
  consent: boolean
  source: string
}): Promise<SubscribeResult> {
  const name = formData.name.trim().slice(0, 120)
  const email = formData.email.trim().toLowerCase().slice(0, 200)
  const role = formData.role.trim().slice(0, 60)
  const source = formData.source.trim().slice(0, 60)

  if (!EMAIL_PATTERN.test(email)) {
    return { success: false, error: "Please enter a valid email address." }
  }
  if (!formData.consent) {
    return { success: false, error: "Please tick the box so I can email you." }
  }

  try {
    const apiKey = process.env.BUTTONDOWN_API_KEY
    if (apiKey) {
      const res = await fetch("https://api.buttondown.com/v1/subscribers", {
        method: "POST",
        headers: { Authorization: `Token ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          email_address: email,
          metadata: { name, role, source },
          tags: ["towards-deep-tech-in-africa", source].filter(Boolean),
        }),
      })
      if (!res.ok) {
        const body = await res.text()
        // Someone signing up twice is not an error for the visitor.
        if (res.status === 400 && /already/i.test(body)) return { success: true }
        throw new Error(`Buttondown responded ${res.status}: ${body.slice(0, 200)}`)
      }
      return { success: true }
    }

    await transporter.sendMail({
      ...mailOptions,
      subject: `[Book list] New signup: ${email}`,
      text: `New signup for Towards Deep Tech in Africa\n\nName: ${name}\nEmail: ${email}\nRole: ${role}\nSource: ${source}\nConsent given: yes\n`,
      html: `
        <h3>New signup for Towards Deep Tech in Africa</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Role:</strong> ${escapeHtml(role)}</p>
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
        <p><strong>Consent given:</strong> yes</p>
      `,
      replyTo: email,
    })
    return { success: true }
  } catch (error) {
    console.error("Failed to record signup:", error)
    return { success: false, error: "Something went wrong. Please try again, or email me directly." }
  }
}
