import { useEffect, useState } from 'react';
import { fetchFlights } from '../api/flights';
import FlightCard from '../components/FlightCard';
import './Dashboard.css';

export default function Dashboard() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetchFlights()
      .then(data => setFlights(data.slice(0, 5)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-wrapper">
      <h1 className="dashboard-title">Recent Flights</h1>
      <div className="dashboard-grid">
        {flights.map(flight => (
          <FlightCard
            key={flight.id}
            from={flight.departure_airport}
            to={flight.arrival_airport}
            date={new Date(flight.departure_time).toLocaleString()}
            price={flight.flight_number}
          />
        ))}
      </div>
    </div>
  );
}
