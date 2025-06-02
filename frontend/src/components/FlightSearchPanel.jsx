import { useState } from "react";
import './FlightSearchPanel.css';

export default function FlightSearchPanel({ onSearch }) {
  const [params, setParams] = useState({
    flight_number: '',
    departure_airport: '',
    arrival_airport: '',
    departure_time: '',
    arrival_time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const cleaned = {
      flight_number: params.flight_number.trim().toLowerCase(),
      departure_airport: params.departure_airport.trim(),
      arrival_airport: params.arrival_airport.trim(),
      departure_time: params.departure_time,
      arrival_time: params.arrival_time
    };

    onSearch(cleaned);
  };

  const handleClear = () => {
    const cleared = {
      flight_number: '',
      departure_airport: '',
      arrival_airport: '',
      departure_time: '',
      arrival_time: ''
    };
    setParams(cleared);
    onSearch(cleared);
  };

  return (
    <div className="search-panel">
      <h2 className="search-title">Search Flights</h2>

      <label htmlFor="flight_number">Flight Number</label>
      <input
        id="flight_number"
        name="flight_number"
        value={params.flight_number}
        onChange={handleChange}
        placeholder="e.g. DL100"
      />

      <label htmlFor="departure_airport">Departure Airport (Code)</label>
        <input
        id="departure_airport"
        name="departure_airport"
        value={params.departure_airport}
        onChange={handleChange}
        placeholder="e.g. JFK"
        />

        <label htmlFor="arrival_airport">Arrival Airport (Code)</label>
        <input
        id="arrival_airport"
        name="arrival_airport"
        value={params.arrival_airport}
        onChange={handleChange}
        placeholder="e.g. SYD"
        />



      <label htmlFor="departure_time">Departure Date</label>
      <input
        id="departure_time"
        name="departure_time"
        type="date"
        value={params.departure_time}
        onChange={handleChange}
      />

      <label htmlFor="arrival_time">Arrival Date</label>
      <input
        id="arrival_time"
        name="arrival_time"
        type="date"
        value={params.arrival_time}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Search</button>
      <button onClick={handleClear} className="clear-btn">Clear</button>
    </div>
  );
}
