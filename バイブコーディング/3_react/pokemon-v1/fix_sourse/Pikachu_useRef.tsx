import React, { useEffect, useState,useRef } from 'react';

const Pikachu: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  const isFirstRef = useRef(true); 
  console.log('Pikachuコンポーネントstart');
  console.log("ステート",imageUrl);
  console.log(isFirstRef.current); 

  useEffect(() => {

     if (isFirstRef.current) {
      console.log('1 フェッチ開始'); 
      fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.sprites.front_default);
        console.log('3 フェッチ完了'); 
        console.log("4" ,isFirstRef.current); 
      })
      .catch((error) => console.error('Error fetching data:', error));

      // 実行した後は false にして、二度と通らないようにする
      isFirstRef.current = false; 

      console.log("2 ",isFirstRef.current); 

     }
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
