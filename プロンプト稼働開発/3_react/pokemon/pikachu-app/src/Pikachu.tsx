import React from 'react';
import { useQuery } from '@tanstack/react-query';

// ポケモンのデータの型定義
interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

// PokeAPIからピカチュウのデータを取得する関数
const fetchPikachu = async (): Promise<Pokemon> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  if (!response.ok) {
    throw new Error('データの取得に失敗しました');
  }
  return response.json();
};

export const Pikachu: React.FC = () => {
  // TanStack Queryを使用して非同期でデータを取得
  const { data, isLoading, error } = useQuery<Pokemon, Error>({
    queryKey: ['pikachu'],
    queryFn: fetchPikachu,
  });

  // ロード中の表示
  if (isLoading) return <div>読み込み中...</div>;

  // エラー発生時の表示
  if (error) return <div>エラーが発生しました: {error.message}</div>;

  // データ表示
  return (
    <div>
      <h1>{data?.name}</h1>
      <img src={data?.sprites.front_default} alt={data?.name} />
    </div>
  );
};
