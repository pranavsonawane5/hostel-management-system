import React, { useState, useEffect } from 'react';

function CanteenMenu() {
  const [menu, setMenu] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [newMenu, setNewMenu] = useState('');
  const [newPhoto, setNewPhoto] = useState(null);

  const fetchMenu = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/canteen-menu');
      const data = await response.json();
      setMenu(data.menu);
      setPhoto(data.photoUrl);
    } catch (err) {
      console.error('Error fetching menu:', err);
    }
  };

  const handleAdminUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('menuData', newMenu);
    if (newPhoto) formData.append('photo', newPhoto);

    try {
      const response = await fetch('http://localhost:5000/api/admin/update-menu', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      setMenu(data.menu);
      setPhoto(data.photoUrl);
      setNewMenu('');
      setNewPhoto(null);
    } catch (err) {
      console.error('Error updating menu:', err);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div>
      <h2>Canteen Menu</h2>
      {photo && <img src={`http://localhost:5000${photo}`} alt="Canteen Menu" style={{ maxWidth: '500px', margin: '20px 0' }} />}
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item.day}: {item.meal}</li>
        ))}
      </ul>
      {/* Admin Section (Secure this in production) */}
      <h3>Admin Update</h3>
      <form onSubmit={handleAdminUpdate}>
        <textarea
          value={newMenu}
          onChange={(e) => setNewMenu(e.target.value)}
          placeholder='[{"day": "Monday", "meal": "Pizza"}]'
        />
        <input
          type="file"
          onChange={(e) => setNewPhoto(e.target.files[0])}
        />
        <button type="submit">Update Menu</button>
      </form>
    </div>
  );
}

export default CanteenMenu;