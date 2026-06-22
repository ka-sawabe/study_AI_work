import React, { useEffect, useState } from 'react';

const Pikachu: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.sprites.front_default);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Pikachu" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Pikachu;
