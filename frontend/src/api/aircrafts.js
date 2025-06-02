export async function fetchAircrafts() {
  const response = await fetch('http://localhost:8000/aircrafts');
  const data = await response.json();
  return data;
}
