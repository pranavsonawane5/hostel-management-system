import React, { useState, useEffect } from 'react';

function CanteenMenu() {
  const [menu, setMenu] = useState([]);
  const [photo, setPhoto] = useState(null);

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
    </div>
  );
}

export default CanteenMenu;