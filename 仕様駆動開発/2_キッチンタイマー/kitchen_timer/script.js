// タイマーの動作を管理するためのクラス
class Timer {
    constructor() {
        this.remainingTime = 0; // 残り時間（秒）
        this.timerId = null;    // setIntervalのID
        this.isRunning = false; // 動作状態
        
        // DOM要素の取得
        this.display = document.getElementById('display');
        this.message = document.getElementById('message');
    }

    // 表示を更新するヘルパーメソッド
    updateDisplay() {
        const mins = Math.floor(this.remainingTime / 60);
        const secs = this.remainingTime % 60;
        this.display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // カウントダウンを開始するメソッド
    start(minutes, seconds) {
        if (this.isRunning) return;
        
        this.remainingTime = (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0);
        if (this.remainingTime <= 0) return;

        this.isRunning = true;
        this.message.textContent = ''; // メッセージをクリア
        
        this.timerId = setInterval(() => {
            this.update();
        }, 1000);
    }

    // タイマーを一時停止するメソッド
    stop() {
        if (!this.isRunning) return;
        
        clearInterval(this.timerId);
        this.isRunning = false;
    }

    // タイマーをリセットするメソッド
    reset() {
        this.stop();
        this.remainingTime = 0;
        this.updateDisplay();
        this.message.textContent = '';
    }

    // 1秒ごとに実行される更新処理
    update() {
        if (this.remainingTime > 0) {
            this.remainingTime--;
            this.updateDisplay();
            this.checkEnd();
        }
    }

    // 終了判定と通知処理
    checkEnd() {
        if (this.remainingTime === 0) {
            this.stop();
            this.message.textContent = 'タイムアップ！';
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
