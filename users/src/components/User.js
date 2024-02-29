import React from 'react';
import './User.css';

const User = ({ user }) => {
  return (
    <div className="user-card">
      <h3 className="user-name">{user.name}</h3>
      <div className="user-details">
        <p><strong>Usuario:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Ciudad:</strong> {user.address.city}</p>
        <p><strong>Telefono:</strong> {user.phone}</p>
        <p><strong>Nombre de la empresa:</strong> {user.company.name}</p>
      </div>
    </div>
  );
}

export default User;
