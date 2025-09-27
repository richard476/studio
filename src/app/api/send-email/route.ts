
'use server';
import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const {name, email, message} = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'richardabishekraj@gmail.com',
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      {message: 'Email sent successfully'},
      {status: 200}
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {message: 'Failed to send email'},
      {status: 500}
    );
  }
}
