import React, { useEffect, useState } from 'react';

const Pikachu: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  console.log('Pikachuコンポーネントstart');
  console.log("ステート",imageUrl);

  useEffect(() => {
  let ignore = false;
  console.log("ignore ",ignore);

    console.log('ignore ', ignore,'フェッチ開始 '); 
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((response) => {
        const json =response.json()
        console.log('ignore ', ignore,'フェッチ完了 ','response.json ', json);
        return json;  
     })
      .then((data) => {
          console.log('ignore ', ignore,'setState前 ');
        if (!ignore) {
          setImageUrl(data.sprites.front_default);
          console.log('ignore ', ignore,'setState完了 ');
        }
      })
      .catch((error) => console.error('Error fetching data:', error));

     return () => {
       ignore = true; 
       console.log("アンマウント ignore ",ignore); 
      }; // 画面から消えたらフラグを折る

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
