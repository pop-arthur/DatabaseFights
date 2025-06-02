import './FlightCard.css';
import planeIcon from '../assets/plane_fromto.svg';

export default function FlightCard({
  fromCode,
  fromCity,
  fromAirport,
  toCode,
  toCity,
  toAirport,
  departureTime,
  arrivalTime,
  date,
  price
}) {
  return (
    <div className="flight-card">
      <div className="flight-header">
        <span>{fromCity}</span>
        <span>{toCity}</span>
      </div>

      <div className="flight-main">
  <div className="airport-info left">
    <div className="flight-city">{fromCity}</div>
    <div className="flight-airport">{fromAirport}</div>
  </div>

  <div className="flight-plane">
    <img src={planeIcon} alt="plane" />
  </div>

  <div className="airport-info right">
    <div className="flight-city">{toCity}</div>
    <div className="flight-airport">{toAirport}</div>
  </div>
</div>


      <div className="flight-time">
        <div className="time-block">
          <div>{date}</div>
          <div className="time">{departureTime}</div>
        </div>
        <div className="time-block-right">
          <div>{date}</div>
          <div className="time">{arrivalTime}</div>
        </div>
      </div>

      <div className="flight-footer">
        <div className="flight-price">₹{price}</div>
        <div className="flight-note">Per Adult</div>
      </div>
    </div>
  );
}
