import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="landing-page">
      <h2>Welcome to the Hostel Management System</h2>
      <div className="options">
        <div className="option-card">
          <h3>Leave Request</h3>
          <Link to="/leaves">Submit a Leave Request</Link>
        </div>
        <div className="option-card">
          <h3>Complaints</h3>
          <Link to="/complaints">File a Complaint</Link>
        </div>
        <div className="option-card">
          <h3>Laundry</h3>
          <Link to="/laundry">Request Laundry Service</Link>
        </div>
        <div className="option-card">
          <h3>Attendance</h3>
          <Link to="/attendance">View Attendance</Link>
        </div>
        <div className="option-card">
          <h3>Canteen Menu</h3>
          <Link to="/canteen-menu">Check Canteen Menu</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;