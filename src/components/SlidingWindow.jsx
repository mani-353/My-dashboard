import React from 'react';
import '../styles/SlidingWindow.css';

const SlidingWindow = ({ isOpen, onClose, children }) => {
  return (
    <div className={`sliding-window ${isOpen ? 'open' : ''}`}>
      <div className="sliding-content">
        <button className="close-btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default SlidingWindow;
