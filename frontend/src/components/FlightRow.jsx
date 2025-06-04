import { useState } from 'react';
import './AirportRow.css';

export default function FlightRow({ flight, onUpdate, onDelete }) {
  const [form, setForm] = useState({ ...flight });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const {
        airline_id,
        aircraft_id,
        departure_airport,
        arrival_airport,
        departure_time,
        arrival_time,
        status,
        delay,
        flight_number
      } = form;

      const res = await fetch(`http://localhost:8000/flights/${flight.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          airline_id,
          aircraft_id,
          departure_airport,
          arrival_airport,
          departure_time,
          arrival_time,
          status,
          delay,
          flight_number
        }),
      });

      if (res.ok) {
        setEditMode(false);
        onUpdate({ ...form });
      } else {
        console.error('Failed to update flight');
      }
    } catch (err) {
      console.error('Error updating flight:', err);
    }
  };

    const handleDelete = async () => {
    try {
         const updateRes = await fetch(`http://localhost:8000/flights/${flight.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...flight,
                status: 'deleted'
            }),
            });

            if (!updateRes.ok) {
            console.error('Failed to update status to deleted');
            return;
            }

        const res = await fetch(`http://localhost:8000/flights/${flight.id}`, {
        method: 'DELETE'
        });

        if (res.ok) {
            onDelete(flight.id);
        } else {
        console.error('Failed to delete flight');
        }
    } catch (err) {
        console.error('Error during deletion:', err);
    }
    };


  return (
    <tr className="airport-row">
      <td className="id-col">{form.id}</td>
      {[
        'flight_number',
        'status',
        'delay',
        'departure_time',
        'arrival_time',
        'airline_id',
        'aircraft_id',
        'departure_airport',
        'arrival_airport'
      ].map((field) => (
        <td key={field}>
          {editMode ? (
            <input
              name={field}
              className="input"
              value={form[field]}
              onChange={handleChange}
            />
          ) : (
            (field === 'departure_time' || field === 'arrival_time')
              ? form[field]?.replace('T', ' ')
              : form[field]
          )}
        </td>
      ))}

      <td className="action-buttons">
        {editMode ? (
          <button className="button" onClick={handleSave}>
            <span className="label">Save</span>
            <svg className="svg-icon" viewBox="0 0 20 20" fill="#4CAF50">
              <path d="M17.414 2.586a2 2 0 0 0-2.828 0l-10 10a2 2 0 0 0-.586 1.414V17a1 1 0 0 0 1 1h3a1 1 0 0 0 .707-.293l10-10a2 2 0 0 0 0-2.828l-1.293-1.293z"/>
            </svg>
          </button>
        ) : (
          <button className="button" onClick={() => setEditMode(true)}>
            <span className="label">Edit</span>
            <svg className="svg-icon" viewBox="0 0 20 20" fill="#4C97B0">
              <path d="M14.846 2.318l2.837 2.837-10.25 10.25-3.371.534.534-3.371 10.25-10.25zM2 18h16v2H2v-2z"/>
            </svg>
          </button>
        )}
      </td>
      <td className="action-buttons">
        <button className="button delete-button" onClick={handleDelete}>
          <span className="label">Delete</span>
          <svg className="svg-icon" viewBox="0 0 448 512" fill="#FF4C4C">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 
            0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 
            284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 
            128H32L53.2 467c1.6 25.3 22.6 45 47.9 
            45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
          </svg>
        </button>
      </td>
    </tr>
  );
}
