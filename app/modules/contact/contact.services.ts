import sendEmail from "../../utils/sendEmailUsingNodeMailer";
import { contact } from "./contact.module"

const createContactInDB = async (payload: IContact) => {
    const result = await contact.create(payload);

    const { name, email, subject, message } = payload;

    try{
        await sendEmail({
        from: process.env.SMTP_USER!,
        to: process.env.SMTP_USER!,
        subject: `Portfolio Contact: ${subject}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2563eb; text-align: center; margin-bottom: 30px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    })

    await sendEmail( {
        from: process.env.SMTP_USER!,
        to: email,
        subject: 'Thank you for contacting me!',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2563eb; text-align: center; margin-bottom: 30px;">Thank You for Reaching Out!</h2>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; color: #374151; line-height: 1.6;">Hi ${name},</p>
            <p style="color: #374151; line-height: 1.6;">Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible, usually within 24 hours.</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #374151; margin-bottom: 15px;">Feel free to check out my work:</p>
            <a href="http://localhost:5173" style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Visit My Portfolio</a>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">Best regards,<br>Arfan Ahmed<br>Full Stack Developer</p>
          </div>
        </div>
      `,
    })
    } catch(err){
        console.log(err)
    }

    return result;
}

export const contactServices = {
    createContactInDB
}