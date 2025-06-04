import { useEffect, useState } from 'react';
import { fetchFlightViews } from '../api/view';
import FlightCard from '../components/FlightCard';
import FlightSearchPanel from '../components/FlightSearchPanel';
import './Dashboard.css';

export default function Dashboard() {
  const [allFlights, setAllFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    fetchFlightViews()
      .then((data) => {
        setAllFlights(data);
        setFilteredFlights(data);
      })
      .catch(console.error);
  }, []);

  const handleSearch = (params) => {
    const filtered = allFlights.filter(flight => {
      return (
        (!params.flight_number || flight.flight_number.toLowerCase().includes(params.flight_number.toLowerCase())) &&
        (!params.departure_airport || flight.departure_airport_code.toLowerCase() === params.departure_airport.toLowerCase()) &&
        (!params.arrival_airport || flight.arrival_airport_code.toLowerCase() === params.arrival_airport.toLowerCase()) &&
        (!params.departure_time || flight.departure_time.startsWith(params.departure_time)) &&
        (!params.arrival_time || flight.arrival_time.startsWith(params.arrival_time))
      );
    });

    setFilteredFlights(filtered);
  };

  return (
    <div className="dashboard-container">
      <div className="search-panel">
        <FlightSearchPanel onSearch={handleSearch} />
      </div>

      <div className="dashboard-results">
        <div className="dashboard-results-inner">
          {filteredFlights.map(flight => (
            <FlightCard
              key={flight.flight_id}
              from={{
                code: flight.departure_airport_code,
                city: flight.departure_city,
                name: flight.departure_airport_name
              }}
              to={{
                code: flight.arrival_airport_code,
                city: flight.arrival_city,
                name: flight.arrival_airport_name
              }}
              departure={flight.departure_time}
              arrival={flight.arrival_time}
              flightNumber={flight.flight_number}
              status={flight.status}
              delay={flight.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
