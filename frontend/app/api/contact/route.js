import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, company, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // REQUIRED for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || '-'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || '-'}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line">${message}</p>
    `;

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.CONTACT_FROM}>`,
      to: process.env.CONTACT_TO.split(',').map(e => e.trim()),
      replyTo: email,
      subject: `Contact Form: ${name}`,
      html,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error('Email send failed:', err);
    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}
