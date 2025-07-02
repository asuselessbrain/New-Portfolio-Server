import nodemailer from "nodemailer";

const sendEmail = async (from: string,
    to: string,
    subject: string,
    html: string) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions: any = {
        from: from,
        to: to,
        subject: subject,
        html: html,
    }

    await transporter.sendMail(mailOptions)
}

export default sendEmail;