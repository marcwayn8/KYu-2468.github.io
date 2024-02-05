import React, { useRef, useEffect } from 'react';
import './Modal.css'; // This file should contain your modal's CSS

// Define the type for the props expected by the Modal component
type ModalProps = {
  children: React.ReactNode; // ReactNode includes anything that can be rendered
  closeModal: () => void; // closeModal is a function that doesn't take any arguments and doesn't return anything
  title: string; // Added the title prop
};

const Modal: React.FC<ModalProps> = ({ title, children, closeModal }) => {
    const modalRef = useRef<HTMLDivElement>(null);
  // Function to stop the click inside the modal content from closing the modal
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation(); // Prevents click event from propagating to parent elements
  };
  const handleCloseClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleCloseClick);
    return () => document.removeEventListener('mousedown', handleCloseClick);
  }, []);
  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={handleContentClick}>
        <button onClick={closeModal} className="modal-close-button">
          &times;
        </button>
        <h2 className="modal-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
