// 各要素の取得
const display = document.getElementById('display');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timerInterval;
let totalSeconds = 0;

// タイマー表示の更新関数
function updateDisplay() {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    display.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// スタートボタンの処理
startBtn.addEventListener('click', () => {
    // すでに動いている場合は何もしない
    if (timerInterval) return;

    // 初回スタート時に入力値を取得
    if (totalSeconds === 0) {
        const m = parseInt(minutesInput.value) || 0;
        const s = parseInt(secondsInput.value) || 0;
        totalSeconds = m * 60 + s;
    }

    if (totalSeconds <= 0) return;

    timerInterval = setInterval(() => {
        totalSeconds--;
        updateDisplay();

        // 0になったら終了
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            display.textContent = "タイムアップ！";
        }
    }, 1000);
});

// ストップボタンの処理
stopBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

// リセットボタンの処理
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 0;
    display.textContent = "00:00";
    minutesInput.value = "";
    secondsInput.value = "";
});
