export async function fetchAirports() {
  const response = await fetch('http://localhost:8000/airports/');
  if (!response.ok) {
    throw new Error('Failed to fetch airports');
  }
  return await response.json();
}
