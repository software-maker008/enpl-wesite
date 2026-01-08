export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name = "",
      company = "",
      email = "",
      phone = "",
      message = "",
    } = body || {};

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required fields",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // ENV CHECK
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Server misconfigured: BREVO_API_KEY missing",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const fromEmail =
      process.env.CONTACT_FROM || "hemant@ehsnetworks.in";
    const fromName =
      process.env.BREVO_SENDER_NAME || "Website Contact Form";

    const toEnv =
      process.env.CONTACT_TO || "imvam12@gmail.com";

    const to = toEnv
      .split(",")
      .map((addr) => addr.trim())
      .filter(Boolean)
      .map((addr) => ({ email: addr }));

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <table cellpadding="6" cellspacing="0" border="0">
        <tr>
          <td><strong>Name</strong></td>
          <td>${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td><strong>Company</strong></td>
          <td>${escapeHtml(company || "-")}</td>
        </tr>
        <tr>
          <td><strong>Email</strong></td>
          <td>${escapeHtml(email)}</td>
        </tr>
        <tr>
          <td><strong>Phone</strong></td>
          <td>${escapeHtml(phone || "-")}</td>
        </tr>
        <tr>
          <td valign="top"><strong>Message</strong></td>
          <td style="white-space: pre-line">${escapeHtml(message)}</td>
        </tr>
      </table>
    `;

    const payload = {
      sender: {
        name: fromName,
        email: fromEmail,
      },
      to,
      subject: `Contact Form: ${name}`,
      htmlContent,
      replyTo: {
        email,
        name,
      },
    };

    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify(payload),
      }
    );

    const brevoText = await brevoResponse.text();

    if (!brevoResponse.ok) {
      console.error("Brevo error:", brevoText);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email sending failed",
          details: safeJson(brevoText),
        }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Unexpected server error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

/* -------------------- helpers -------------------- */

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
