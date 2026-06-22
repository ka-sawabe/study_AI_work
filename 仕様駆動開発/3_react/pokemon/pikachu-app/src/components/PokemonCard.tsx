import React from 'react';
import { useFetchPokemon } from '../hooks/useFetchPokemon';

const PokemonCard: React.FC = () => {
  // カスタムフックからデータを取得
  const { data, loading, error } = useFetchPokemon();

  // 読み込み中の表示
  if (loading) return <div>Loading...</div>;
  // エラー時の表示
  if (error) return <div>Error: {error}</div>;
  // データがない場合の表示
  if (!data) return <div>No data found</div>;

  return (
    <div>
      {/* 取得した名前と画像を表示 */}
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
};

export default PokemonCard;
