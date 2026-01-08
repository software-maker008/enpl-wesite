import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'VALIDATION_ERROR' }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'noreply@electrohelps.in',
        pass: 'Enplindia@2026',
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: '"Website Contact" <noreply@electrohelps.in>',
      to: 'support@ehsnetworks.in',
      replyTo: email,
      subject: `Contact Form: ${name}`,
      html: `<p>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message,
      }),
      { status: 500 }
    );
  }
}
