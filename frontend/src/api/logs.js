export async function fetchFlightLogs() {
  const res = await fetch("http://localhost:8000/flights/status-log");
  if (!res.ok) throw new Error("Failed to fetch logs");
  return res.json();
}
