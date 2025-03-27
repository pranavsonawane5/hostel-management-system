import React, { useState } from 'react';

function Login() {
  const [role, setRole] = useState('student');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password, role })
      });
      const data = await response.json();
      if (response.ok) {
        alert('Login successful!'); // Replace with redirect logic in production
        setId('');
        setPassword('');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID (e.g., 12345)"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;