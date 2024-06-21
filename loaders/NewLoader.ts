export interface Props {
  apiUrl: string;
  apiKey?: string;
  maxResults?: number;
}

export async function loader(
  { apiUrl, apiKey, maxResults = 10 }: Props,
  _req: Request,
) {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = await response.json();

  if (Array.isArray(data)) {
    return data.slice(0, maxResults);
  }

  return data;
}