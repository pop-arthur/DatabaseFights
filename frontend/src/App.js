import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Flights from './pages/Flights';
import Airports from './pages/Airports';
import Airlines from './pages/Airlines';
import Aircrafts from './pages/Aircrafts';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/airports" element={<Airports />} />
        <Route path="/airlines" element={<Airlines />} />
        <Route path="/aircrafts" element={<Aircrafts />} />
      </Routes>
    </Router>
  );
}

export default App;
