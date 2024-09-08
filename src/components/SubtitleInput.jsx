import React, { useState, useRef, useEffect } from 'react';
import './SubtitleInput.css';

function SubtitleInput() {
  const [subtitle, setSubtitle] = useState('');
  const [color, setColor] = useState('#000000');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [subtitle]);

  return (
    <div className="subtitle-input">
      <textarea
        ref={textareaRef}
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Enter book subtitle"
        className="subtitle-text"
        style={{ color: color }}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="color-picker"
      />
    </div>
  );
}

export default SubtitleInput;