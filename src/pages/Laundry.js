import React, { useState, useEffect } from 'react';
import LaundryForm from '../components/LaundryForm';

function Laundry() {
  const [laundry, setLaundry] = useState([]);

  const fetchLaundry = async () => {
    try {
      const response = await fetch('/api/laundry');
      if (!response.ok) throw new Error('Failed to fetch laundry');
      const data = await response.json();
      setLaundry(data);
    } catch (err) {
      console.error('Error fetching laundry:', err);
    }
  };

  useEffect(() => {
    fetchLaundry();
  }, []);

  return (
    <div>
      <h2>Laundry Requests</h2>
      <LaundryForm onLaundryAdded={fetchLaundry} />
      <ul>
        {laundry.map((l) => (
          <li key={l.id}>{l.items} - {l.status || 'Pending'}</li>
        ))}
      </ul>
    </div>
  );
}

export default Laundry;