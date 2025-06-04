import { useEffect, useState } from 'react';
import FlightRow from '../components/FlightRow'; 
import './Airports.css'; 

export default function Flights() {
  const [flights, setFlights] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/flights')
      .then((res) => res.json())
      .then((data) => setFlights(data))
      .catch(console.error);
  }, []);

  const handleDelete = (id) => {
  setFlights((prev) => prev.filter((f) => f.id !== id));
};


  const handleUpdate = (updatedFlight) => {
    setFlights((prev) =>
      prev.map((f) => (f.id === updatedFlight.id ? updatedFlight : f))
    );
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFlights = searchTerm.trim() === ''
    ? flights
    : flights.filter((flight) => {
        const term = searchTerm.toLowerCase();
        return (
          flight.flight_number.toLowerCase().includes(term) ||
          flight.status.toLowerCase().includes(term) ||
          flight.delay.toLowerCase().includes(term) ||
          flight.departure_time.toLowerCase().includes(term) ||
          flight.arrival_time.toLowerCase().includes(term)
        );
      });

  return (
    <div className="airports-page">
      <input
        type="text"
        placeholder="Search flights..."
        className="airport-search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="table-container">
        <table>
          <thead>
            <tr>
                <th className="id-col">ID</th>
                <th>Flight Number</th>
                <th>Status</th>
                <th>Delay</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Airline ID</th>
                <th>Aircraft ID</th>
                <th>From Airport</th>
                <th>To Airport</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>

          <tbody>
            {filteredFlights.map((flight) => (
                <FlightRow
                key={flight.id}
                flight={flight}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                />
            ))}
            </tbody>

        </table>
      </div>
    </div>
  );
}
