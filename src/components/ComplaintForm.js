import React, { useState } from 'react';

function ComplaintForm({ onComplaintAdded }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student_id: 1, text })
      });
      if (!response.ok) throw new Error('Failed to submit complaint');
      setText('');
      if (onComplaintAdded) onComplaintAdded();
      alert('Complaint submitted!');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        cols={50}
        placeholder="Enter your complaint"
        required
      />
      <button type="submit">Submit Complaint</button>
    </form>
  );
}

export default ComplaintForm;