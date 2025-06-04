import { useEffect, useState } from 'react';
import AirportRow from '../components/AirportRow';
import './Airports.css';

export default function Airports() {
  const [airports, setAirports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Чёткое поведение: если поле пустое — отдаем всё
  const filteredAirports = searchTerm.trim() === ''
    ? airports
    : airports.filter((airport) => {
        const term = searchTerm.toLowerCase();
        return (
          airport.name.toLowerCase().includes(term) ||
          airport.code.toLowerCase().includes(term) ||
          airport.city.toLowerCase().includes(term) ||
          airport.country.toLowerCase().includes(term)
        );
      });

  return (
    <div className="airports-page">
      <input
        type="text"
        placeholder="Search airports..."
        className="airport-search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />

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
            {filteredAirports.map((airport) => (
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
