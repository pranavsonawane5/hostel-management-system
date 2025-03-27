import React, { useState, useEffect } from 'react';
import ComplaintForm from '../components/ComplaintForm';

function Complaints() {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    try {
      const response = await fetch('/api/complaints');
      if (!response.ok) throw new Error('Failed to fetch complaints');
      const data = await response.json();
      setComplaints(data);
    } catch (err) {
      console.error('Error fetching complaints:', err);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div>
      <h2>Complaints</h2>
      <ComplaintForm onComplaintAdded={fetchComplaints} />
      <ul>
        {complaints.map((c) => (
          <li key={c.id} data-status={c.status}>{c.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Complaints;