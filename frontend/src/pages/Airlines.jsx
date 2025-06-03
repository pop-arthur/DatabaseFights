import { useEffect, useState } from 'react';
import AirlineRow from '../components/AirlineRow';
import './Airports.css'; 

export default function Airlines() {
  const [airlines, setAirlines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/airlines')
      .then((res) => res.json())
      .then((data) => setAirlines(data))
      .catch(console.error);
  }, []);

  const handleUpdate = (updatedAirline) => {
    setAirlines((prev) =>
      prev.map((a) => (a.id === updatedAirline.id ? updatedAirline : a))
    );
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAirlines = searchTerm.trim() === ''
    ? airlines
    : airlines.filter((airline) => {
        const term = searchTerm.toLowerCase();
        return (
          airline.nam.toLowerCase().includes(term) ||
          airline.code.toLowerCase().includes(term)
        );
      });

  return (
    <div className="airports-page">
      <input
        type="text"
        placeholder="Search airlines..."
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
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredAirlines.map((airline) => (
              <AirlineRow
                key={airline.id}
                airline={airline}
                onUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
