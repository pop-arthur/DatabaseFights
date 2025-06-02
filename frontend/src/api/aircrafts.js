export async function fetchAircrafts() {
  const response = await fetch('http://localhost:8000/aircrafts');
  if (!response.ok) {
    throw new Error('Failed to fetch aircrafts');
  }
  return response.json();
}
