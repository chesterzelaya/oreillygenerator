import React from 'react';
import html2canvas from 'html2canvas';
import './DownloadButton.css';

function DownloadButton() {
  const handleDownload = () => {
    const bookCover = document.querySelector('.book-cover');
    const arrows = document.querySelectorAll('.animal-selector button');

    // Hide arrows
    arrows.forEach(arrow => arrow.classList.add('hidden'));

    // Small delay to ensure all elements are rendered
    setTimeout(() => {
      html2canvas(bookCover, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'oreilly-book-cover.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        // Show arrows again
        arrows.forEach(arrow => arrow.classList.remove('hidden'));
      });
    }, 100);
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      Download Image
    </button>
  );
}

export default DownloadButton;