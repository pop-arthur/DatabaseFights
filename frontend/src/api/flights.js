export async function fetchFlights() {
  const response = await fetch('http://localhost:8000/flights/');
  if (!response.ok) {
    throw new Error('Failed to fetch flights');
  }
  return response.json();
}
