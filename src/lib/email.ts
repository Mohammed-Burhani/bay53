import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface DemoFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees?: string;
  message?: string;
}

async function sendEmail(mailOptions: nodemailer.SendMailOptions) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('Attempting to send email with config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASS,
    });

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', mailOptions.to);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: 'Error sending email', details: error };
  }
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Email to admin
    const mailOptionsToAdmin = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: data.email,
      subject: `Contact Form: ${data.subject}`,
      text: `Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Subject: ${data.subject}
Message: ${data.message}`,
      html: `
      <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px; border: 1px solid #e0e0e0;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="background: white; padding: 15px; border-radius: 5px;">${data.message.replace(/\n/g, '<br>')}</p>
      </div>
    `,
    };

    // Confirmation email to client
    const mailOptionsToClient = {
      from: process.env.SMTP_USER,
      to: data.email,
      subject: 'Thank You for Contacting Us',
      text: `Dear ${data.name},

Thank you for reaching out to us. We have received your message and will review the details you've shared with us.

A member of our team will contact you shortly to discuss your inquiry.

Best regards,
Bay53 Team`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
          body, html {
            font-family: 'Montserrat', Arial, sans-serif;
          }
        </style>
      </head>
      <body>
        <div style="max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px; border: 1px solid #e0e0e0;">
          <h2 style="color: #333; font-size: 24px;">Dear ${data.name},</h2>
          <p>Thank you for reaching out to us. We have received your message and will review the details you've shared with us.</p>
          <p>A member of our team will contact you shortly to discuss your inquiry.</p>
          <p>Best regards,</p>
          <p><strong>Bay53 Team</strong></p>
        </div>
      </body>
      </html>
    `,
    };

    const response1 = await sendEmail(mailOptionsToAdmin);
    const response2 = await sendEmail(mailOptionsToClient);

    if (response1.success && response2.success) {
      return { success: true };
    } else {
      return { success: false, error: response1.error || response2.error };
    }
  } catch (error) {
    console.error('Error in sendContactEmail:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendDemoRequestEmail(data: DemoFormData) {
  try {
    // Email to admin
    const mailOptionsToAdmin = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: data.email,
      subject: `Demo Request from ${data.company}`,
      text: `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
${data.employees ? `Number of Employees: ${data.employees}` : ''}
${data.message ? `Additional Information: ${data.message}` : ''}`,
      html: `
      <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px; border: 1px solid #e0e0e0;">
        <h2 style="color: #333;">New Demo Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        ${data.employees ? `<p><strong>Number of Employees:</strong> ${data.employees}</p>` : ''}
        ${data.message ? `<p><strong>Additional Information:</strong></p><p style="background: white; padding: 15px; border-radius: 5px;">${data.message.replace(/\n/g, '<br>')}</p>` : ''}
      </div>
    `,
    };

    // Confirmation email to client
    const mailOptionsToClient = {
      from: process.env.SMTP_USER,
      to: data.email,
      subject: 'Thank You for Your Demo Request',
      text: `Dear ${data.name},

Thank you for requesting a demo of our solution. We have received your request and are excited to show you what we can do for ${data.company}.

A member of our team will contact you shortly to schedule a convenient time for your personalized demo.

Best regards,
Bay53 Team`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
          body, html {
            font-family: 'Montserrat', Arial, sans-serif;
          }
        </style>
      </head>
      <body>
        <div style="max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px; border: 1px solid #e0e0e0;">
          <h2 style="color: #333; font-size: 24px;">Dear ${data.name},</h2>
          <p>Thank you for requesting a demo of our solution. We have received your request and are excited to show you what we can do for <strong>${data.company}</strong>.</p>
          <p>A member of our team will contact you shortly to schedule a convenient time for your personalized demo.</p>
          <p>Best regards,</p>
          <p><strong>Bay53 Team</strong></p>
        </div>
      </body>
      </html>
    `,
    };

    const response1 = await sendEmail(mailOptionsToAdmin);
    const response2 = await sendEmail(mailOptionsToClient);

    if (response1.success && response2.success) {
      return { success: true };
    } else {
      return { success: false, error: response1.error || response2.error };
    }
  } catch (error) {
    console.error('Error in sendDemoRequestEmail:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
