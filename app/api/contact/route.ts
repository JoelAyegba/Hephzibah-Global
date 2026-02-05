import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import sendgrid from '@sendgrid/mail';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, subject, message } = await req.json();

  // Basic validation
  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // Allow SMTP-specific env vars or fallback to legacy EMAIL_USER/EMAIL_PASS
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;

  if (!smtpUser || !smtpPass) {
    console.error('Email credentials are not configured: set SMTP_USER/SMTP_PASS or EMAIL_USER/EMAIL_PASS');
    return NextResponse.json({ message: 'Email credentials not configured on the server' }, { status: 500 });
  }

  const transportOptions: any = smtpHost
    ? {
        host: smtpHost,
        port: smtpPort || 587,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      }
    : {
        service: 'gmail',
        auth: { user: smtpUser, pass: smtpPass },
      };
  // If SendGrid API key is present, prefer SendGrid (no SMTP setup required)
  if (process.env.SENDGRID_API_KEY) {
    try {
      sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: 'beulahwalkofhope@gmail.com',
        from: smtpUser || 'no-reply@beulahwalkofhope.org',
        subject: `New message from ${firstName} ${lastName}: ${subject}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      } as any;
      await sendgrid.send(msg);
      return NextResponse.json({ message: 'Form submitted successfully' });
    } catch (error: any) {
      console.error('SendGrid error sending contact email:', error);
      const payload: any = { message: 'Error submitting form' };
      if (process.env.NODE_ENV !== 'production') payload.error = String(error?.message || error);
      return NextResponse.json(payload, { status: 500 });
    }
  }

  const transporter = nodemailer.createTransport(transportOptions);

  const mailOptions = {
    from: email,
    to: 'beulahwalkofhope@gmail.com',
    subject: `New message from ${firstName} ${lastName}: ${subject}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error: any) {
    console.error('Nodemailer error sending contact email:', error);
    const payload: any = { message: 'Error submitting form' };
    if (process.env.NODE_ENV !== 'production') payload.error = String(error?.message || error);
    return NextResponse.json(payload, { status: 500 });
  }
}
