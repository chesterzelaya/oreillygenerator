import React, { useState } from 'react';
import './AnimalSelector.css';
import bear from '../assets/bear.png';
import bunny from '../assets/bunny.png';
import cheetah from '../assets/cheetah.png';
import fox from '../assets/fox.png';
import koala from '../assets/koala.png';
import lion from '../assets/lion.png';
import tiger from '../assets/tiger.png';

// You'll need to import animal images and add them to this array
const animalImages = [
  bear,
  bunny,
  cheetah,
  fox,
  koala,
  lion,
  tiger,
];

function AnimalSelector() {
  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);

  const cycleAnimal = () => {
    setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animalImages.length);
  };

  return (
    <div className="animal-selector">
      <img 
        src={animalImages[currentAnimalIndex]} 
        alt="Animal" 
        className="animal-image" 
        onClick={cycleAnimal}
      />
    </div>
  );
}

export default AnimalSelector;