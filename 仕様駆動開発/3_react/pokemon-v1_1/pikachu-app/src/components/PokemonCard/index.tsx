import React from 'react';
import { useQuery } from '@tanstack/react-query';
import type { PokemonData } from './types';

// PokeAPIからピカチュウの情報を取得する関数
const fetchPokemon = async (): Promise<PokemonData> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  if (!response.ok) {
    throw new Error('ポケモンのデータの取得に失敗しました');
  }
  return response.json();
};

export const PokemonCard: React.FC = () => {
  // TanStack Queryを使用してデータを取得
  // コンポーネントがマウントされると自動的にデータを取得し、キャッシュする
  const { data, isLoading, error } = useQuery<PokemonData, Error>({
    queryKey: ['pokemon', 'pikachu'],
    queryFn: fetchPokemon,
  });

  if (isLoading) return <div>読み込み中...</div>;
  
  // エラーハンドリング
  if (error) return <div>エラーが発生しました: {error.message}</div>;
  
  // データが存在しない場合（正常系でここは通らないはず）
  if (!data) return <div>データがありません。</div>;

  return (
    <div>
      <img src={data.sprites.front_default} alt={data.name} />
      <h1>名前: {data.name}</h1>
    </div>
  );
};
