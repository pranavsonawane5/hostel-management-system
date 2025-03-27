import React, { useState } from 'react';

function LeaveForm({ onLeaveAdded }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/leaves', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student_id: 1, start_date: startDate, end_date: endDate })
      });
      if (!response.ok) throw new Error('Failed to submit leave');
      setStartDate('');
      setEndDate('');
      if (onLeaveAdded) onLeaveAdded();
      alert('Leave request submitted!');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <button type="submit">Submit Leave</button>
    </form>
  );
}

export default LeaveForm;