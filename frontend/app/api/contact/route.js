import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message } = body || {};

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

   const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // MUST be true for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // Add these options for better compatibility
  tls: {
    rejectUnauthorized: false
  },
  // Explicitly define the encryption method
  requireTLS: true
});

    // Support one or multiple recipients via comma-separated list
    const toEnv = process.env.CONTACT_TO || 'imvam12@gmail.com';
    const toAddress = toEnv
      .split(',')
      .map((addr) => addr.trim())
      .filter(Boolean);

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Company Name:</strong> ${company || '-'}</p>
      <p><strong>Email Address:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone || '-'}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line">${message}</p>
    `;

    await transporter.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER,
      to: toAddress,
      subject: `Contact Form: ${name}`,
      replyTo: email,
      html,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send message' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}


