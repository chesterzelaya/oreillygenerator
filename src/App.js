import React from 'react';
import './App.css';
import BookCover from './components/BookCover';
import TitleInput from './components/TitleInput';
import SubtitleInput from './components/SubtitleInput';
import AnimalSelector from './components/AnimalSelector';
import DownloadButton from './components/DownloadButton';

function App() {
  return (
    <div className="App">
      <h1>O'Reilly Parody Book Cover Generator</h1>
      <BookCover>
        <TitleInput />
        <SubtitleInput />
        <AnimalSelector />
      </BookCover>
      <DownloadButton />
    </div>
  );
}

export default App;
