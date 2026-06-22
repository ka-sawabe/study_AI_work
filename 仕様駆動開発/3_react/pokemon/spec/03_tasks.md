# 実装タスク一覧

## 1. ディレクトリと空ファイルの準備
- [x] **プロジェクト構造の構築**
    - `src/components`, `src/hooks`, `src/types` ディレクトリを作成。
    - 各ディレクトリ内に以下の空ファイルを配置：
        - `src/types/pokemon.ts`
        - `src/hooks/useFetchPokemon.ts`
        - `src/components/PokemonCard.tsx`

## 2. UIコンポーネントの基本実装
- [x] **PokemonCardの骨組み作成**
    - `src/components/PokemonCard.tsx` を作成。
    - ピカチュウの画像タグ (`<img>`) と名前表示エリア (`<p>` または `<h1>`) のJSXを実装。
    - 取得中 (`loading`) とエラー (`error`) の状態に応じた表示分岐を追加。

## 3. PokeAPI連携ロジックの実装
- [x] **カスタムフックの実装**
    - `src/hooks/useFetchPokemon.ts` で `useFetchPokemon` を定義。
    - `useRef` で `isMounted` フラグを生成し、`useEffect` 内で API 取得処理を実行。
    - `https://pokeapi.co/api/v2/pokemon/pikachu` からデータ取得し、Stateへ格納。

## 4. 画面とロジックの統合
- [x] **コンポーネントの統合**
    - `src/components/PokemonCard.tsx` から `useFetchPokemon` を呼び出し。
    - `src/App.tsx` を編集し、`PokemonCard` コンポーネントをインポート・配置。

## 5. 動作確認（テスト）
- [ ] **ブラウザ表示確認**
    - アプリ起動後、ピカチュウの画像と名前が表示されることを確認。
- [ ] **コンソール確認**
    - APIエラーが発生していないことを確認。
- [ ] **useEffect挙動確認**
    - コンポーネント再レンダリング時、API取得処理が重複して実行されないことを確認。
