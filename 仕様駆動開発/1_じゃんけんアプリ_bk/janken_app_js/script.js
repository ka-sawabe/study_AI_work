/**
 * じゃんけんゲームのロジックを管理するクラス
 */
class JankenGame {
    constructor() {
        this.remaining = 5;
        this.score = { win: 0, lose: 0, draw: 0 };
    }

    /**
     * コンピュータの手をランダムに取得する
     */
    getComputerChoice() {
        const choices = ['グー', 'チョキ', 'パー'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    /**
     * 勝敗を判定する
     */
    judge(user, computer) {
        if (user === computer) {
            this.score.draw++;
            return 'あいこ';
        }
        if (
            (user === 'グー' && computer === 'チョキ') ||
            (user === 'チョキ' && computer === 'パー') ||
            (user === 'パー' && computer === 'グー')
        ) {
            this.score.win++;
            return '勝ち';
        }
        this.score.lose++;
        return '負け';
    }

    /**
     * ゲームをプレイする
     */
    play(userChoice) {
        if (this.remaining <= 0) return null;

        const computerChoice = this.getComputerChoice();
        const result = this.judge(userChoice, computerChoice);
        this.remaining--;

        return { userChoice, computerChoice, result, remaining: this.remaining, score: this.score };
    }
}

// ゲームのインスタンスを作成
const game = new JankenGame();

/**
 * 結果を画面のDOM要素に表示する
 */
function updateUI(data) {
    document.getElementById('result-user').textContent = data.userChoice;
    document.getElementById('result-computer').textContent = data.computerChoice;
    document.getElementById('result-text').textContent = data.result;
    document.getElementById('remaining-count').textContent = data.remaining;
    document.getElementById('score-win').textContent = data.score.win;
    document.getElementById('score-lose').textContent = data.score.lose;
    document.getElementById('score-draw').textContent = data.score.draw;
}

/**
 * ユーザーがボタンを押した時の処理
 */
function handleChoice(userChoice) {
    const data = game.play(userChoice);
    if (data) {
        updateUI(data);
        if (data.remaining === 0) {
            alert('ゲーム終了！');
        }
    }
}

// 各ボタンにクリックイベントリスナーを登録する
document.getElementById('btn-rock').addEventListener('click', () => handleChoice('グー'));
document.getElementById('btn-scissors').addEventListener('click', () => handleChoice('チョキ'));
document.getElementById('btn-paper').addEventListener('click', () => handleChoice('パー'));
