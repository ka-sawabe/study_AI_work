# 実装タスク一覧：ポケモン情報表示コンポーネント

## 1. ディレクトリと空ファイルの準備
- [x] **プロジェクト構造の作成**
    - `src/components/PokemonCard/` ディレクトリを作成する。
    - `src/components/PokemonCard/index.tsx` を作成する。
    - `src/components/PokemonCard/types.ts` を作成する。

## 2. UIコンポーネントの基本実装
- [x] **型定義の作成**
    - `src/components/PokemonCard/types.ts` に `PokemonData` インターフェースを定義する（name, sprites.front_default を含む）。
- [x] **コンポーネント雛形の作成**
    - `src/components/PokemonCard/index.tsx` で、ローディング状態・エラー状態・正常表示状態のJSX構造を実装する。

## 3. PokeAPI連携ロジックの実装
- [x] **APIフェッチ関数の作成**
    - `src/components/PokemonCard/index.tsx` に `fetchPokemon` 関数を定義する。
- [x] **TanStack Queryの導入**
    - `src/components/PokemonCard/index.tsx` に `useQuery` フックを実装し、データを取得する。

## 4. 画面とロジックの統合
- [x] **App.tsxへの組み込み**
    - `src/App.tsx` を編集し、`PokemonCard` コンポーネントをインポート・配置する。
    - `src/main.tsx` (または `App.tsx` の親) に `QueryClientProvider` を設置し、API連携を可能にする。

## 5. 動作確認（テスト）
- [x] **ブラウザ表示確認**
    - アプリを起動し、ピカチュウの名前と画像が表示されるか確認する。
- [x] **状態遷移の確認**
    - 初回読み込み時のローディング表示、成功時のデータ表示が意図通りか確認する。
