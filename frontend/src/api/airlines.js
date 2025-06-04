export async function fetchAirlines() {
  const response = await fetch('http://localhost:8000/airlines');
  const data = await response.json();
  return data;
}
