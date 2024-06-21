export interface Props {
  apiUrl: string;
  limit?: number;
}

export async function loader({ apiUrl, limit }: Props) {
  const response = await fetch(`${apiUrl}?limit=${limit}`);
  const data = await response.json();
  
  if (!Array.isArray(data)) {
    throw new Error('API response is not an array');
  }

  return data;
}