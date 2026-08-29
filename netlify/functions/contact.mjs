const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
};

const FIELD_LIMITS = {
  fullName: 120,
  email: 254,
  phone: 50,
  topic: 160,
  message: 5000,
};

const response = (status, body) => new Response(JSON.stringify(body), {
  status,
  headers: JSON_HEADERS,
});

const asText = (value) => typeof value === 'string' ? value.trim() : '';

const escapeHtml = (value) => value.replace(/[&<>'"]/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
}[character]));

const validate = ({ fullName, email, phone, topic, message }) => {
  const errors = {};
  if (fullName.length < 2 || fullName.length > FIELD_LIMITS.fullName) errors.fullName = 'Unesi ispravno ime i prezime.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > FIELD_LIMITS.email) errors.email = 'Unesi ispravnu e-mail adresu.';
  if (!/^[0-9+()\s./-]+$/.test(phone) || (phone.match(/\d/g)?.length ?? 0) < 6 || phone.length > FIELD_LIMITS.phone) errors.phone = 'Unesi ispravan broj telefona.';
  if (topic.length < 2 || topic.length > FIELD_LIMITS.topic) errors.topic = 'Unesi ispravnu temu.';
  if (message.length < 10 || message.length > FIELD_LIMITS.message) errors.message = 'Poruka mora imati između 10 i 5000 znakova.';
  return errors;
};

export default async (request) => {
  if (request.method !== 'POST') {
    return response(405, { ok: false, message: 'Method not allowed' });
  }

  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    return response(403, { ok: false });
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 20_000) return response(413, { ok: false });

  let body;
  try {
    body = await request.json();
  } catch {
    return response(400, { ok: false });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return response(400, { ok: false });
  }

  if (asText(body.company)) {
    return response(200, { ok: true });
  }

  const submission = {
    fullName: asText(body.fullName),
    email: asText(body.email),
    phone: asText(body.phone),
    topic: asText(body.topic),
    message: asText(body.message),
  };
  const fieldErrors = validate(submission);

  if (Object.keys(fieldErrors).length) {
    return response(422, { ok: false, fieldErrors });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@kinasaksenijom.com';

  if (!apiKey || !fromEmail) {
    console.error('Kontakt forma nije konfigurisana: nedostaje RESEND_API_KEY ili CONTACT_FROM_EMAIL.');
    return response(500, { ok: false });
  }

  const safeSubject = submission.topic.replace(/[\r\n]+/g, ' ').slice(0, FIELD_LIMITS.topic);
  const text = [
    'Novi upit sa sajta Kina sa Ksenijom',
    '',
    `Ime i prezime: ${submission.fullName}`,
    `E-mail: ${submission.email}`,
    `Broj telefona: ${submission.phone}`,
    `Tema: ${submission.topic}`,
    '',
    'Poruka:',
    submission.message,
  ].join('\n');
  const htmlMessage = escapeHtml(submission.message).replace(/\r?\n/g, '<br>');
  const html = `
    <div style="font-family:Arial,sans-serif;color:#261d1b;line-height:1.6;max-width:680px">
      <h1 style="font-size:24px">Novi upit sa sajta Kina sa Ksenijom</h1>
      <table style="border-collapse:collapse;width:100%;margin:24px 0">
        <tr><th style="padding:8px 12px;text-align:left;border-bottom:1px solid #ddd">Ime i prezime</th><td style="padding:8px 12px;border-bottom:1px solid #ddd">${escapeHtml(submission.fullName)}</td></tr>
        <tr><th style="padding:8px 12px;text-align:left;border-bottom:1px solid #ddd">E-mail</th><td style="padding:8px 12px;border-bottom:1px solid #ddd">${escapeHtml(submission.email)}</td></tr>
        <tr><th style="padding:8px 12px;text-align:left;border-bottom:1px solid #ddd">Broj telefona</th><td style="padding:8px 12px;border-bottom:1px solid #ddd">${escapeHtml(submission.phone)}</td></tr>
        <tr><th style="padding:8px 12px;text-align:left;border-bottom:1px solid #ddd">Tema</th><td style="padding:8px 12px;border-bottom:1px solid #ddd">${escapeHtml(submission.topic)}</td></tr>
      </table>
      <h2 style="font-size:18px">Poruka</h2>
      <p>${htmlMessage}</p>
    </div>`;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: submission.email,
        subject: `Novi upit sa sajta: ${safeSubject}`,
        text,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error(`Resend greška (${resendResponse.status}): ${details.slice(0, 1000)}`);
      return response(502, { ok: false });
    }

    return response(200, { ok: true });
  } catch (error) {
    console.error('Slanje kontakt poruke nije uspelo.', error);
    return response(502, { ok: false });
  }
};

export const config = {
  path: '/api/contact',
};
