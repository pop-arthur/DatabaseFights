import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Flights', path: '/flights' },
    { name: 'Airports', path: '/airports' },
    { name: 'Airlines', path: '/airlines' },
    { name: 'Aircrafts', path: '/aircrafts' }
  ];

  return (
    <div className="navbar">
      {navItems.map(item => (
        <Link to={item.path} key={item.name} className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
