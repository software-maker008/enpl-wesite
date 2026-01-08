import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message } = body || {};

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, error: "Server misconfigured: BREVO_API_KEY missing" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const toEnv = process.env.CONTACT_TO || "imvam12@gmail.com";
    const to = toEnv
      .split(",")
      .map((addr) => addr.trim())
      .filter(Boolean)
      .map((addr) => ({ email: addr }));

    const fromEmail = process.env.CONTACT_FROM || "hemant@ehsnetworks.in";
    const fromName = process.env.BREVO_SENDER_NAME || "Website Contact Form";

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Full Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Company Name:</strong> ${escapeHtml(company || "-")}</p>
      <p><strong>Email Address:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone Number:</strong> ${escapeHtml(phone || "-")}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line">${escapeHtml(message)}</p>
    `;

    const payload = {
      sender: { name: fromName, email: fromEmail },
      to,
      subject: `Contact Form: ${name}`,
      htmlContent: html,
      replyTo: { email, name }, // so you can directly reply to customer
    };

    const resp = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();

    if (!resp.ok) {
      console.error("Brevo error:", resp.status, text);
      return new Response(
        JSON.stringify({ success: false, error: "Brevo send failed", details: safeJson(text) }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send message" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeJson(text) {
  try { return JSON.parse(text); } catch { return text; }
}
