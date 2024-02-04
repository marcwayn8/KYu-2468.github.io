import React from 'react';
import './Modal.css'; // This file should contain your modal's CSS



const Modal = ({ children, closeModal }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={closeModal} className="modal-close-button">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
