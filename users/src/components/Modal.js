

import React from 'react';
import './Modal.css';
const Modal = ({ user, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Detalles del Usuario</h2>
        <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Ciudad:</strong> {user.address.city}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            <p><strong>Compañía:</strong> {user.company.name}</p>
      </div>
    </div>
  );
};

export default Modal;

