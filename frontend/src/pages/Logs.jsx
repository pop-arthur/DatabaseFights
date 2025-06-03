import { useEffect, useState } from 'react';
import { fetchFlightLogs } from '../api/logs';
import './Airports.css';

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchFlightLogs()
      .then(data => setLogs(data))
      .catch(console.error);
  }, []);

  return (
    <div className="airports-page">
    <h2 style={{ fontFamily: 'Segoe UI', color: '#333940', marginTop: '60px' }}>
    Flight Status Logs
    </h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="id-col">ID</th>
              <th>Flight ID</th>
              <th>Old Status</th>
              <th>New Status</th>
              <th>Changed At</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id} className="airport-row">
                <td className="id-col">{log.id}</td>
                <td>{log.flight_id}</td>
                <td>{log.old_status}</td>
                <td>{log.new_status}</td>
                <td>{new Date(log.changed_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
