"use server"

import { transporter, mailOptions } from "@/lib/nodemailer"

export async function sendEmail(formData: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}) {
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `[Contact Form] ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        
        Message:
        ${formData.message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br/>')}</p>
      `,
      replyTo: formData.email,
    })
    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: "Failed to send message" }
  }
}
