export async function fetchFlightViews() {
  const res = await fetch("http://localhost:8000/flights/view");
  if (!res.ok) throw new Error("Failed to fetch flight views");
  return res.json();
}
