# 設計仕様書：ポケモン情報表示コンポーネント

## 1. 概要
本アプリケーションは、PokeAPIからピカチュウの情報を取得し、表示するシンプルなReactコンポーネントです。宣言的なデータフェッチを実現し、キャッシュやローディング・エラー状態のハンドリングを容易にするため、**TanStack Query (@tanstack/react-query)** を採用します。

## 2. 画面レイアウト案
```text
+---------------------------------------+
|  ピカチュウ情報表示                   |
+---------------------------------------+
|                                       |
|  [ピカチュウの画像]                   |
|                                       |
|  名前: Pikachu                        |
|                                       |
+---------------------------------------+
```

## 3. ファイル構成
```text
src/
├── components/
│   └── PokemonCard/
│       ├── index.tsx          # コンポーネント定義
│       └── types.ts           # 型定義
├── App.tsx                    # メインコンポーネント
└── main.tsx                   # QueryClientProviderのラップ
```

## 4. クラス・関数設計

### 4.1 コンポーネント責務
- **`PokemonCard`**:
    - PokeAPIの取得ロジック（`useQuery`）を内包し、データ、ローディング中、エラー時の表示を管理する。
    - 取得したデータを視覚的に整形して表示する。
- **`App`**:
    - `PokemonCard`を配置し、アプリケーションのルートとして機能する。

### 4.2 主要ロジック・型定義
- **APIフェッチ**:
    - `fetchPokemon`: `fetch` APIを用いてJSONデータを取得する関数。
- **State管理**:
    - `useQuery`により、取得データをキャッシュし、自動的にリフレッシュを行う。
- **型定義 (`PokemonCard/types.ts`)**:
    - APIレスポンスをマッピングする`PokemonData`型を定義する。
    ```typescript
    export interface PokemonData {
      name: string;
      sprites: {
        front_default: string;
      };
    }
    ```
