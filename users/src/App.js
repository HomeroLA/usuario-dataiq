

import React, { useState, useEffect } from 'react';
import User from './components/User';
import Modal from './components/Modal';
import logo from './images/logo.png';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); 
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.address.city.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="title-box">
        <h1>Datos usuarios</h1>
      </div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Ingresa valores para buscar"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="row">
        {filteredUsers.map(user => (
          <div className="col-md-4" key={user.id} onClick={()=>openModal(user)}>
            <User user={user} />
          </div>
        ))}
      </div>
      {showModal && <Modal user={selectedUser} onClose={closeModal} />} {}
    </div>
  );
}


export default App;
