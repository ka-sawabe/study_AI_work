# じゃんけんゲーム 設計書

## 1. デザイン方針
- シンプルで直感的なUIとし、ボタンを押すだけで即座に結果がわかる構成にします。
- HTMLで構造を、CSSでレイアウトを、JSでロジックを分離して記述します。

## 2. 画面レイアウト案
- タイトル：「じゃんけんゲーム」
- 手選択エリア：グー・チョキ・パーの3つのボタン
- 結果表示エリア：
  - コンピュータの手
  - 勝敗結果

## 3. ファイル構成
```
janken_app_js/
├── index.html    (構造)
├── style.css     (デザイン)
└── script.js     (ロジック)
```

## 4. クラス・関数設計

### index.html
- ボタン要素: `btn-rock`, `btn-scissors`, `btn-paper`
- 結果表示エリア: `#result-computer`, `#result-text`

### style.css
- ボタン配置の装飾、結果テキストのフォント・カラー指定

### script.js
- `init()`: イベントリスナーの登録
- `handleChoice(userChoice)`: ユーザーの選択を受け取り、勝敗判定ロジックを呼び出す
- `getComputerChoice()`: ランダムにグー・チョキ・パーを選択する関数
- `determineWinner(user, computer)`: 勝ち・負け・あいこを判定する関数
- `updateUI(computerChoice, result)`: 画面の結果表示エリアを更新する関数
