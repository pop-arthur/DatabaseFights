import { useEffect, useState } from 'react';
import { fetchFlights } from '../api/flights';
import { fetchAirports } from '../api/airports';
import FlightCard from '../components/FlightCard';
import FlightSearchPanel from '../components/FlightSearchPanel';
import './Dashboard.css';

export default function Dashboard() {
  const [allFlights, setAllFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [airportMap, setAirportMap] = useState({});

  useEffect(() => {
    Promise.all([fetchFlights(), fetchAirports()])
      .then(([flights, airports]) => {
        setAllFlights(flights);
        setFilteredFlights(flights);
        const airportDict = Object.fromEntries(
          airports.map(airport => [airport.id, airport])
        );
        setAirportMap(airportDict);
      })
      .catch(console.error);
  }, []);

  const handleSearch = (params) => {
    if (!airportMap || Object.keys(airportMap).length === 0) {
    console.warn('Airport map not ready yet.');
    return;
  }
    const filtered = allFlights.filter(flight => {
  const depCode = airportMap[flight.departure_airport]?.code?.toLowerCase();
  const arrCode = airportMap[flight.arrival_airport]?.code?.toLowerCase();

  return (
    (!params.flight_number || flight.flight_number.toLowerCase().includes(params.flight_number.toLowerCase())) &&
    (!params.departure_airport || depCode === params.departure_airport.toLowerCase()) &&
    (!params.arrival_airport || arrCode === params.arrival_airport.toLowerCase()) &&
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
              key={flight.id}
              from={airportMap[flight.departure_airport]}
              to={airportMap[flight.arrival_airport]}
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
