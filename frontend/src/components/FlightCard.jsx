import './FlightCard.css';
import planeIcon from '../assets/plane_fromto.svg';

export default function FlightCard({
  from,
  to,
  departure,
  arrival,
  flightNumber,
  status,
  delay
}) {
  return (
    <div className="flight-card">
      <div className="flight-top">
        <div className="flight-city-block">
          <div className="flight-code">{from?.code}</div>
          <div className="flight-city">{from?.city}</div>
          <div className="flight-airport">{from?.name}</div>
        </div>

        <img src={planeIcon} alt="plane" className="flight-plane-icon" />

        <div className="flight-city-block">
          <div className="flight-code">{to?.code}</div>
          <div className="flight-city">{to?.city}</div>
          <div className="flight-airport">{to?.name}</div>
        </div>
      </div>

      <div className="flight-middle">
        <div className="flight-time-block">
          <div className="flight-label">Departure</div>
          <div>{new Date(departure).toLocaleString()}</div>
        </div>

        <div className="flight-time-block">
          <div className="flight-label">Arrival</div>
          <div>{new Date(arrival).toLocaleString()}</div>
        </div>
      </div>

      <div className="flight-bottom">
        <div>Flight: <strong>{flightNumber}</strong></div>
        <div>Status: {status} | Delay: {delay}</div>
      </div>
    </div>
  );
}
