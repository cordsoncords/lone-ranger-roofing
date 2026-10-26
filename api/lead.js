// ============================================================
// BLOCKLISTS — add entries here to block a submission.
// Address entries: lowercase substrings, matched against the
// lowercased address field.
// Phone entries: digits only, no leading "1", matched against
// the phone field AND the message field (digits only).
//
// ============================================================
const ADDRESS_BLOCKLIST = [
  'gould st',
];

const PHONE_BLOCKLIST = [
  '3072076448',
  '7867725501',
];
// ============================================================

const FORMSPREE_URL = 'https://formspree.io/f/mlgyrabo';

export function normalizePhone(raw) {
  let digits = String(raw || '').replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) {
    digits = digits.slice(1);
  }
  return digits;
}

export function isBlockedSubmission({ address, phone, message } = {}) {
  const addr = String(address || '').toLowerCase();
  if (ADDRESS_BLOCKLIST.some((entry) => addr.includes(entry))) {
    return true;
  }

  const normalizedPhone = normalizePhone(phone);
  if (normalizedPhone && PHONE_BLOCKLIST.includes(normalizedPhone)) {
    return true;
  }

  const messageDigits = String(message || '').replace(/\D/g, '');
  if (messageDigits && PHONE_BLOCKLIST.includes(messageDigits)) {
    return true;
  }

  return false;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const fields = req.body && typeof req.body === 'object' ? req.body : {};

  if (isBlockedSubmission(fields)) {
    // Same shape/status a real submission gets — this request is
    // silently dropped instead of forwarded to Formspree.
    return res.status(200).json({ ok: true });
  }

  try {
    const formspreeRes = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(fields),
    });

    const contentType = formspreeRes.headers.get('content-type') || '';
    const body = contentType.includes('application/json')
      ? await formspreeRes.json()
      : { ok: formspreeRes.ok };

    return res.status(formspreeRes.status).json(body);
  } catch (err) {
    return res.status(502).json({ ok: false, error: 'Unable to reach form service' });
  }
}
