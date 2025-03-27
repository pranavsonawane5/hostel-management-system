import React, { useState, useEffect } from 'react';

function Attendance() {
  const [attendance, setAttendance] = useState([]);

  const fetchAttendance = async () => {
    try {
      const response = await fetch('/api/attendance');
      if (!response.ok) throw new Error('Failed to fetch attendance');
      const data = await response.json();
      setAttendance(data);
    } catch (err) {
      console.error('Error fetching attendance:', err);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <div>
      <h2>Attendance</h2>
      <ul>
        {attendance.map((a) => (
          <li key={a.id}>{a.date} - {a.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;