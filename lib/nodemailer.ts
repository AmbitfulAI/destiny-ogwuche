import nodemailer from "nodemailer";

const user = process.env.ZEPTOMAIL_USER;
const pass = process.env.ZEPTOMAIL_PASS;
const fromEmail = process.env.ZEPTOMAIL_FROM_EMAIL;
const toEmail = process.env.ZEPTOMAIL_TO_EMAIL;

export const transporter = nodemailer.createTransport({
  host: "smtp.zeptomail.com",
  port: 587,
  auth: {
    user: user,
    pass: pass,
  },
});

export const mailOptions = {
  from: fromEmail,
  to: toEmail,
};
