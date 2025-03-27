import React, { useState } from 'react';

function Register() {
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, id, password, role })
      });
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        setName('');
        setId('');
        setPassword('');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;