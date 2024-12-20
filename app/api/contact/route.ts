import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const cadFile = formData.get('cadFile') as File | null;

    // Create a test SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for MetalKraft
    const adminMailOptions = {
      from: email,
      to: 'metalkrft@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Message:</strong> ${message}</p>
      `,
      attachments: cadFile ? [
        {
          filename: cadFile.name,
          content: Buffer.from(await cadFile.arrayBuffer()),
        }
      ] : [],
    };

    // Automated response for customer
    const customerMailOptions = {
      from: 'metalkrft@gmail.com',
      to: email,
      subject: 'Thank you for contacting MetalKraft CNC',
      text: `
Dear ${name},

Thank you for reaching out to MetalKraft CNC. We have received your inquiry and our team will review it promptly.

We typically respond within 24-48 business hours. If your matter is urgent, please feel free to call us at +91 9876543210.

Your message details:
${message}

Best regards,
MetalKraft CNC Team
Plot 23, Industrial Area
Sri City, Andhra Pradesh, India
      `,
      html: `
<p>Dear ${name},</p>

<p>Thank you for reaching out to MetalKraft CNC. We have received your inquiry and our team will review it promptly.</p>

<p>We typically respond within 24-48 business hours. If your matter is urgent, please feel free to call us at <a href="tel:+919876543210">+91 9876543210</a>.</p>

<p><strong>Your message details:</strong><br>
${message}</p>

<p>Best regards,<br>
MetalKraft CNC Team<br>
Plot 23, Industrial Area<br>
Sri City, Andhra Pradesh, India</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      {
        message: 'Email sent successfully',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        message: 'Error sending email',
      },
      {
        status: 500,
      }
    );
  }
}
