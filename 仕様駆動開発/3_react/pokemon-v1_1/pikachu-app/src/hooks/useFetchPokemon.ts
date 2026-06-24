import { useState, useEffect, useRef } from 'react';
import type { PokemonData } from '../types/pokemon';

export const useFetchPokemon = () => {
  const [data, setData] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // コンポーネントがマウント済みかどうかを管理するフラグ
  const isMounted = useRef(false);

  useEffect(() => {
    // 初回マウント時のみ処理を実行するための制御
    if (!isMounted.current) {
      isMounted.current = true;

      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
          if (!response.ok) throw new Error('Failed to fetch data');
          const result: PokemonData = await response.json();
          setData(result);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [isMounted]); // フラグを依存配列として使用

  return { data, loading, error };
};
