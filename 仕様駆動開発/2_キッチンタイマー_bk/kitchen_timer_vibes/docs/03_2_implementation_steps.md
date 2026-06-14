# 実装詳細手順書（03_2_implementation_steps.md）

## 手順 01: ファイルの雛形作成
- 目的: プロジェクトに必要なファイルの枠組みを作る。
- 作業:
    - `index.html`: HTML5の雛形を作成。
    - `style.css`: CSSの初期化（リセットCSS）を記述。
    - `script.js`: `KitchenTimer`クラスの骨組み（コンストラクタ）を定義。

## 手順 02: UIの実装
- 目的: ユーザーが操作する画面構成を作る。
- 作業:
    - `index.html`: タイマー表示エリア（id="display"）、入力エリア（id="minutes", id="seconds"）、操作ボタン（id="start", id="stop", id="reset"）、メッセージエリア（id="status"）を配置。
    - `style.css`: 各要素の配置を調整し、キッチンタイマーらしい見た目（Flexbox利用）に整える。

## 手順 03: ロジックの基本実装
- 目的: タイマーの動作に必要な変数を管理し、ロジックのベースを作る。
- 作業:
    - `script.js`: `KitchenTimer`クラスのコンストラクタ内で、各HTML要素の取得と変数（`timerInterval`, `remainingTime`）を初期化。
    - `script.js`: `updateDisplay()`メソッドを実装し、現在の残り時間を表示エリアへ反映する機能を作成。

## 手順 04: タイマー操作機能の実装
- 目的: ボタンごとの動作を実装する。
- 作業:
    - `script.js`: `startTimer()`メソッドを実装し、カウントダウン処理（setInterval）を記述。
    - `script.js`: `stopTimer()`メソッドを実装し、カウントダウンの停止（clearInterval）を記述。
    - `script.js`: `resetTimer()`メソッドを実装し、カウントダウンの停止と時間を初期値に戻す処理を記述。

## 手順 05: 終了判定と連携
- 目的: 終了時の挙動と、画面・ロジックを統合する。
- 作業:
    - `script.js`: `checkTimeUp()`メソッドを実装し、0分00秒判定とタイムアップ表示のロジックを作成。
    - `script.js`: 各ボタンのクリックイベントと、対応するメソッド（`startTimer`, `stopTimer`, `resetTimer`）を紐付ける。
