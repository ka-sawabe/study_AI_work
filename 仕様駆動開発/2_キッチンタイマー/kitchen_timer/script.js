// タイマーの動作を管理するためのクラス
class Timer {
    constructor() {
        this.remainingTime = 0; // 残り時間（秒）
        this.timerId = null;    // setIntervalのID
        this.isRunning = false; // 動作状態
        
        // DOM要素の取得
        this.display = document.getElementById('display');
        this.message = document.getElementById('message');
        this.minutesInput = document.getElementById('minutes');
        this.secondsInput = document.getElementById('seconds');
    }

    // 表示を更新するヘルパーメソッド
    updateDisplay() {
        const mins = Math.floor(this.remainingTime / 60);
        const secs = this.remainingTime % 60;
        this.display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // タイマーを開始（または一時停止状態から再開）するメソッド
    start(minutes, seconds) {
        if (this.isRunning) return; // すでに動作中なら何もしない
        
        // 残り時間が0の場合のみ、新しく入力値から時間を計算する
        if (this.remainingTime === 0) {
            this.remainingTime = (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0);
        }
        
        if (this.remainingTime <= 0) return; // 0秒以下なら開始しない

        this.isRunning = true;
        this.message.textContent = ''; // メッセージをクリア
        
        // 1秒ごとにupdateを呼び出すインターバルを設定
        this.timerId = setInterval(() => {
            this.update();
        }, 1000);
        
        console.log("タイマーを開始しました");
    }

    // タイマーを一時停止するメソッド
    stop() {
        if (!this.isRunning) return; // 動作中でなければ何もしない
        
        clearInterval(this.timerId); // インターバルを解除
        this.isRunning = false;
        console.log("タイマーを一時停止しました");
    }

    // タイマーを停止し、残り時間を0に戻し、画面表示と入力欄をクリアするメソッド
    reset() {
        this.stop(); // 停止処理を呼び出す
        this.remainingTime = 0;
        this.updateDisplay();
        this.message.textContent = '';
        // 入力欄を空にする
        this.minutesInput.value = '';
        this.secondsInput.value = '';
        console.log("タイマーをリセットしました");
    }

    // 1秒ごとに実行される更新処理
    update() {
        if (this.remainingTime > 0) {
            this.remainingTime--; // 1秒減らす
            this.updateDisplay();
            this.checkEnd(); // 終了判定
        }
    }

    // 終了判定と通知処理
    checkEnd() {
        if (this.remainingTime === 0) {
            this.stop(); // 停止
            this.message.textContent = 'タイムアップ！';
            console.log("タイムアップ！");
        }
    }
}

// インスタンス化
const myTimer = new Timer();

// ボタンイベントの登録
document.getElementById('startBtn').addEventListener('click', () => {
    const minInput = document.getElementById('minutes').value;
    const secInput = document.getElementById('seconds').value;
    myTimer.start(minInput, secInput);
});

document.getElementById('stopBtn').addEventListener('click', () => {
    myTimer.stop();
});

document.getElementById('resetBtn').addEventListener('click', () => {
    myTimer.reset();
});
