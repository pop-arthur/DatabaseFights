import { useEffect, useState } from 'react';
import AirportRow from '../components/AirportRow';
import './Airports.css';

export default function Airports() {
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/airports')
      .then((res) => res.json())
      .then((data) => setAirports(data))
      .catch(console.error);
  }, []);

  const handleUpdate = (updatedAirport) => {
    setAirports((prev) =>
      prev.map((a) => (a.id === updatedAirport.id ? updatedAirport : a))
    );
  };

  return (
    <div className="airports-page">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="id-col">ID</th>
              <th>Name</th>
              <th>Code</th>
              <th>City</th>
              <th>Country</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {airports.map((airport) => (
              <AirportRow
                key={airport.id}
                airport={airport}
                onUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
