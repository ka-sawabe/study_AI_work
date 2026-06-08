class KitchenTimer {
    constructor() {
        // HTML要素の取得
        this.display = document.getElementById('display');
        this.minutesInput = document.getElementById('minutes');
        this.secondsInput = document.getElementById('seconds');
        this.startButton = document.getElementById('start');
        this.stopButton = document.getElementById('stop');
        this.resetButton = document.getElementById('reset');
        this.statusDisplay = document.getElementById('status');

        // タイマーの状態管理用変数
        this.timerInterval = null;
        this.remainingTime = 0; // 秒単位で保持

        // アプリの初期化
        this.init();
    }

    init() {
        // スタートボタンのイベントリスナー
        this.startButton.addEventListener('click', () => this.startTimer());
        // ストップボタンのイベントリスナー
        this.stopButton.addEventListener('click', () => this.stopTimer());
        // リセットボタンのイベントリスナー
        this.resetButton.addEventListener('click', () => this.resetTimer());
    }

    // 画面表示を更新するメソッド
    updateDisplay() {
        const minutes = Math.floor(this.remainingTime / 60);
        const seconds = this.remainingTime % 60;
        // 分と秒を2桁で表示する
        this.display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // カウントダウンを開始するメソッド
    startTimer() {
        if (this.timerInterval) return; // 既に動作中の場合は何もしない

        // 入力値から時間を設定（初回のみ）
        if (this.remainingTime === 0) {
            const m = parseInt(this.minutesInput.value) || 0;
            const s = parseInt(this.secondsInput.value) || 0;
            this.remainingTime = m * 60 + s;
        }

        if (this.remainingTime <= 0) return;

        this.statusDisplay.textContent = ''; // ステータスをクリア
        this.timerInterval = setInterval(() => {
            this.remainingTime--;
            this.updateDisplay();
            if (this.remainingTime <= 0) {
                this.stopTimer();
                this.statusDisplay.textContent = 'タイムアップ！';
            }
        }, 1000);
    }

    // カウントダウンを停止するメソッド
    stopTimer() {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
    }

    // タイマーをリセットするメソッド
    resetTimer() {
        this.stopTimer();
        this.remainingTime = 0;
        this.updateDisplay();
        this.statusDisplay.textContent = '';
        this.minutesInput.value = '';
        this.secondsInput.value = '';
    }
}

// アプリの初期化
document.addEventListener('DOMContentLoaded', () => {
    new KitchenTimer();
});
