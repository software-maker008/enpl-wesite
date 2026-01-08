import nodemailer from 'nodemailer';

// 🔴 REQUIRED: Nodemailer needs Node.js runtime
export const runtime = 'nodejs';

export async function POST(request) {
  try {
    // 1️⃣ Parse body
    const body = await request.json();
    const { name, company, email, phone, message } = body || {};

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'VALIDATION_ERROR',
          details: 'Name, email, and message are required',
        }),
        { status: 400 }
      );
    }

    // 2️⃣ ENV DEBUG (safe — no secrets printed)
    const envDebug = {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER ? 'SET' : 'MISSING',
      SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'MISSING',
      CONTACT_FROM: process.env.CONTACT_FROM,
      CONTACT_TO: process.env.CONTACT_TO,
    };

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'ENV_ERROR',
          details: 'SMTP environment variables missing',
          envDebug,
        }),
        { status: 500 }
      );
    }

    // 3️⃣ Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // MUST be true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 4️⃣ Verify SMTP connection FIRST
    try {
      await transporter.verify();
    } catch (smtpErr) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'SMTP_VERIFY_FAILED',
          details: smtpErr.message,
          code: smtpErr.code,
          response: smtpErr.response,
          envDebug,
        }),
        { status: 500 }
      );
    }

    // 5️⃣ Build email
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || '-'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || '-'}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line">${message}</p>
    `;

    // 6️⃣ Send email
    try {
      const info = await transporter.sendMail({
        from: `"Website Contact" <${process.env.CONTACT_FROM || process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO.split(',').map(e => e.trim()),
        replyTo: email,
        subject: `Contact Form: ${name}`,
        html,
      });

      return new Response(
        JSON.stringify({
          success: true,
          messageId: info.messageId,
        }),
        { status: 200 }
      );
    } catch (sendErr) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'SMTP_SEND_FAILED',
          details: sendErr.message,
          code: sendErr.code,
          response: sendErr.response,
          envDebug,
        }),
        { status: 500 }
      );
    }

  } catch (err) {
    // 7️⃣ Code/runtime errors
    return new Response(
      JSON.stringify({
        success: false,
        error: 'SERVER_ERROR',
        details: err.message,
        stack: err.stack,
      }),
      { status: 500 }
    );
  }
}
