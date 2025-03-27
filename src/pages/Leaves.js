import React, { useState, useEffect } from 'react';
import LeaveForm from '../components/LeaveForm';

function Leaves() {
  const [leaves, setLeaves] = useState([]);

  const fetchLeaves = async () => {
    try {
      const response = await fetch('/api/leaves');
      if (!response.ok) throw new Error('Failed to fetch leaves');
      const data = await response.json();
      setLeaves(data);
    } catch (err) {
      console.error('Error fetching leaves:', err);
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <div>
      <h2>Leave Requests</h2>
      <LeaveForm onLeaveAdded={fetchLeaves} />
      <ul>
        {leaves.map((l) => (
          <li key={l.id}>
            {l.start_date} to {l.end_date} - {l.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaves;