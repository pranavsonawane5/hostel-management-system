import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Complaints from './pages/Complaints';
import Leaves from './pages/Leaves';
import Laundry from './pages/Laundry';
import Attendance from './pages/Attendance';
import CanteenMenu from './pages/CanteenMenu';
import UserDetails from './pages/UserDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import './styles/App.css';

function App() {
  const user = { name: 'John Doe', id: '12345' }; // Mock user
  const isLoggedIn = true; // Simulate login state (replace with real logic later)

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <div className="nav-left">
              <h1>Hostel Management System</h1>
            </div>
            <div className="nav-right">
              {isLoggedIn ? (
                <>
                  <Link to="/canteen-menu">Menu</Link>
                  <Link to="/laundry">Laundry</Link>
                  <Link to="/complaints">Complaint</Link>
                  <Link to="/leaves">Leave</Link>
                  <Link to="/attendance">Attendance</Link>
                  <Link to="/user-details">Profile</Link>
                  <Link to="/">Logout</Link>
                </>
              ) : (
                <>
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/leaves" element={<Leaves />} />
            <Route path="/laundry" element={<Laundry />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/canteen-menu" element={<CanteenMenu />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer>
          <p>© 2025 Hostel Management System. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;