import { useState } from 'react';
import './AirportRow.css';

export default function AirportRow({ airport, onUpdate }) {
  const [form, setForm] = useState({ ...airport });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const { name, code, city, country } = form; // ✨ только нужные поля
      const res = await fetch(`http://localhost:8000/airports/${airport.id}`, {
        method: 'PUT', // используем PUT, как логично
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, code, city, country }),
      });

      if (res.ok) {
        setEditMode(false);
        onUpdate({ ...airport, name, code, city, country }); // обновляем только нужное
      } else {
        console.error('Failed to update airport');
      }
    } catch (err) {
      console.error('Error updating airport:', err);
    }
  };

  return (
    <tr className="airport-row">
      <td className="id-col">{form.id}</td>
      {['name', 'code', 'city', 'country'].map((field) => (
        <td key={field}>
          {editMode ? (
            <input
              name={field}
              className="input"
              value={form[field]}
              onChange={handleChange}
            />
          ) : (
            form[field]
          )}
        </td>
      ))}
      <td>
        {editMode ? (
  <button className="button" onClick={handleSave}>
    <span className="label">Save</span>
    <svg className="svg-icon" viewBox="0 0 20 20" fill="#4C97B0" width="18" height="18">
      <path d="M17.414 2.586a2 2 0 0 0-2.828 0l-10 10a2 2 0 0 0-.586 1.414V17a1 1 0 0 0 1 1h3a1 1 0 0 0 .707-.293l10-10a2 2 0 0 0 0-2.828l-1.293-1.293zM5 16v-1.586l9-9L15.586 7l-9 9H5zm1 1h1.586l9-9L16 7.414l-9 9V17z"/>
    </svg>
  </button>
) : (
  <button className="button" onClick={() => setEditMode(true)}>
    <span className="label">Edit</span>
    <svg className="svg-icon" viewBox="0 0 20 20" fill="#4C97B0" width="18" height="18">
      <path d="M14.846 2.318l2.837 2.837-10.25 10.25-3.371.534.534-3.371 10.25-10.25zM2 18h16v2H2v-2z"/>
    </svg>
  </button>
)}

      </td>
    </tr>
  );
}
