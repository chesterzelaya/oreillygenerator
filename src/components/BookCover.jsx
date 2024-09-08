import React from 'react';
import './BookCover.css';
import oreillyLogo from '../assets/oreilly-logo.png';

function BookCover({ children }) {
  return (
    <div className="book-cover">
      <img src={oreillyLogo} alt="O'Reilly Logo" className="oreilly-logo" />
      <div className="book-content">
        {children}
      </div>
    </div>
  );
}

export default BookCover;