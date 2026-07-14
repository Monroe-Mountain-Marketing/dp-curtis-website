export interface WebsiteLeadInput {
  firstName: string;
  email: string;
  phone?: string;
  message?: string;
  source: string;
}

const HIGHLEVEL_BASE_URL = 'https://services.leadconnectorhq.com';
const HIGHLEVEL_VERSION = '2021-07-28';

function requireEnvVar(name: 'VITE_GHL_API_KEY' | 'VITE_GHL_LOCATION_ID'): string {
  const value = import.meta.env[name]?.trim();

  if (!value) {
    throw new Error(`${name} is missing. Set it in your .env file.`);
  }

  return value;
}

export async function submitWebsiteLead(input: WebsiteLeadInput): Promise<void> {
  const apiKey = requireEnvVar('VITE_GHL_API_KEY');
  const locationId = requireEnvVar('VITE_GHL_LOCATION_ID');

  const body = {
    locationId,
    firstName: input.firstName,
    email: input.email,
    phone: input.phone || undefined,
    source: input.source,
    tags: ['Website Lead'],
    customFields: input.message
      ? [
          {
            key: 'contact_message',
            field_value: input.message,
          },
        ]
      : undefined,
  };

  const response = await fetch(`${HIGHLEVEL_BASE_URL}/contacts/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: HIGHLEVEL_VERSION,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    return;
  }

  let details = '';

  try {
    const errorJson = await response.json();
    details = errorJson?.message || errorJson?.error || '';
  } catch {
    details = '';
  }

  const errorMessage = details
    ? `HighLevel request failed (${response.status}): ${details}`
    : `HighLevel request failed (${response.status}).`;

  throw new Error(errorMessage);
}
