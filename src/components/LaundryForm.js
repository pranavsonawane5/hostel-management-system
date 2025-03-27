import React, { useState } from 'react';

function LaundryForm({ onLaundryAdded }) {
  const [items, setItems] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/laundry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student_id: 1, items })
      });
      if (!response.ok) throw new Error('Failed to submit laundry');
      setItems('');
      if (onLaundryAdded) onLaundryAdded();
      alert('Laundry request submitted!');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={items}
        onChange={(e) => setItems(e.target.value)} // Fixed from setText to setItems
        placeholder="Enter laundry items (e.g., 3 shirts)"
        required
      />
      <button type="submit">Submit Laundry</button>
    </form>
  );
}

export default LaundryForm;