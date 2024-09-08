import React, { useState, useRef, useEffect } from 'react';
import './TitleInput.css';

function TitleInput() {
  const [title, setTitle] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [title]);

  return (
    <div className="title-input">
      <textarea
        ref={textareaRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book title"
        className="title-text"
      />
    </div>
  );
}

export default TitleInput;