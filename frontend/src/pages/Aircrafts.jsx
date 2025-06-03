import { useEffect, useState } from 'react';
import AircraftRow from '../components/AircraftRow';
import './Airports.css'; // переиспользуем те же стили

export default function Aircrafts() {
  const [aircrafts, setAircrafts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/aircrafts')
      .then((res) => res.json())
      .then((data) => setAircrafts(data))
      .catch(console.error);
  }, []);

  const handleUpdate = (updatedAircraft) => {
    setAircrafts((prev) =>
      prev.map((a) => (a.id === updatedAircraft.id ? updatedAircraft : a))
    );
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAircrafts = searchTerm.trim() === ''
    ? aircrafts
    : aircrafts.filter((aircraft) => {
        const term = searchTerm.toLowerCase();
        return (
          aircraft.model.toLowerCase().includes(term) ||
          aircraft.registration.toLowerCase().includes(term)
        );
      });

  return (
    <div className="airports-page">
      <input
        type="text"
        placeholder="Search aircrafts..."
        className="airport-search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="id-col">ID</th>
              <th>Model</th>
              <th>Registration</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredAircrafts.map((aircraft) => (
              <AircraftRow
                key={aircraft.id}
                aircraft={aircraft}
                onUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
