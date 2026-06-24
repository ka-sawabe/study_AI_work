# 設計仕様書：ポケモン情報表示アプリ

## 1. 概要
本アプリケーションは、PokeAPIからピカチュウの情報を取得・表示するシンプルなReactアプリです。保守性を高めるため、ReactのHooksを活用しつつ、依存配列の制御にはフラグ管理を用いた設計とします。

## 2. 画面レイアウト案
```text
+------------------------------------------+
|  ポケモン情報表示                        |
+------------------------------------------+
|                                          |
|  [ ピカチュウの画像 ]                    |
|                                          |
|  名前：ピカチュウ                        |
|                                          |
+------------------------------------------+
```

## 3. ファイル構成
```text
/src
  ├── App.tsx          # メインコンポーネント
  ├── components/
  │    └── PokemonCard.tsx  # ポケモン情報表示コンポーネント
  ├── hooks/
  │    └── useFetchPokemon.ts # API取得ロジック（Hooks）
  └── types/
       └── pokemon.ts       # 型定義
```

## 4. クラス・関数設計

### 4.1. データ管理方針
* `useEffect` の空の依存配列（`[]`）は使用禁止。
* `useRef` を用いたマウント済みフラグ（`isMounted`）を導入し、副作用の制御を行う。

### 4.2. 主要コンポーネント・関数
* **PokemonCard.tsx**:
    * `props`: なし
    * 役割：ピカチュウの画像と名前を表示。
    * ロジック：`useFetchPokemon` を呼び出し、データを取得してレンダリング。
* **useFetchPokemon.ts**:
    * 役割：APIからのデータ取得。
    * State：`data` (ポケモンの詳細), `loading` (読み込み中フラグ), `error` (エラー内容)。
    * 実装詳細：
        ```typescript
        const isMounted = useRef(false);
        useEffect(() => {
            if (!isMounted.current) {
                isMounted.current = true;
                // API取得処理
            }
        }, [isMounted]); // 依存配列にrefを使用
        ```
* **types/pokemon.ts**:
    * `PokemonData` 型定義（必要なAPIフィールドのみ抽出）。
