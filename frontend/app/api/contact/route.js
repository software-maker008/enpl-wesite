export const runtime = "nodejs";

export async function POST(request) {
  try {
    console.log("CONTACT API HIT");

    const body = await request.json();

    const {
      name = "",
      company = "",
      email = "",
      phone = "",
      message = "",
    } = body || {};

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return Response.json(
        { success: false, error: "BREVO_API_KEY missing" },
        { status: 500 }
      );
    }

    const to = (process.env.CONTACT_TO || "")
      .split(",")
      .map(e => e.trim())
      .filter(Boolean)
      .map(email => ({ email }));

    const payload = {
      sender: {
        name: process.env.BREVO_SENDER_NAME || "Website Contact",
        email: process.env.CONTACT_FROM || "hemant@ehsnetworks.in",
      },
      to,
      subject: `Contact Form: ${name}`,
      htmlContent: `
        <h2>New Contact Form</h2>
        <p><b>Name:</b> ${esc(name)}</p>
        <p><b>Company:</b> ${esc(company || "-")}</p>
        <p><b>Email:</b> ${esc(email)}</p>
        <p><b>Phone:</b> ${esc(phone || "-")}</p>
        <p><b>Message:</b><br/>${esc(message)}</p>
      `,
      replyTo: { email, name },
    };

    const controller = new AbortController();
    setTimeout(() => controller.abort(), 10000); // ⏱️ 10s timeout

    const resp = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const text = await resp.text();

    if (!resp.ok) {
      console.error("BREVO ERROR:", text);
      return Response.json(
        { success: false, error: "Brevo send failed", details: text },
        { status: 502 }
      );
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}

function esc(v) {
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
