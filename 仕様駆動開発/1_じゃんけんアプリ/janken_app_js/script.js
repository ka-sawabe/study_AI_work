/**
 * じゃんけんゲームのロジックを管理するクラス
 */
class JankenGame {
    /**
     * コンピュータの手をランダムに取得する
     * @returns {string} グー・チョキ・パーのいずれか
     */
    getComputerChoice() {
        const choices = ['グー', 'チョキ', 'パー'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    /**
     * 勝敗を判定する
     * @param {string} userChoice ユーザーの手
     * @param {string} computerChoice コンピュータの手
     * @returns {string} 勝ち・負け・あいこ
     */
    judge(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'あいこ';
        }
        
        if (
            (userChoice === 'グー' && computerChoice === 'チョキ') ||
            (userChoice === 'チョキ' && computerChoice === 'パー') ||
            (userChoice === 'パー' && computerChoice === 'グー')
        ) {
            return '勝ち';
        }
        
        return '負け';
    }
}

// ゲームのインスタンスを作成する
const game = new JankenGame();

/**
 * 結果を画面のDOM要素に表示する
 * @param {string} computerChoice コンピュータの手
 * @param {string} result 勝敗結果
 */
function updateUI(computerChoice, result) {
    document.getElementById('result-computer').textContent = computerChoice;
    document.getElementById('result-text').textContent = result;
}

/**
 * ユーザーがボタンを押した時の処理
 * @param {string} userChoice ユーザーが選んだ手
 */
function handleChoice(userChoice) {
    // 1. コンピュータの手を決定する
    const computerChoice = game.getComputerChoice();
    // 2. 勝敗を判定する
    const result = game.judge(userChoice, computerChoice);
    // 3. 結果をUIに反映する
    updateUI(computerChoice, result);
}

// 各ボタンにクリックイベントリスナーを登録する
document.getElementById('btn-rock').addEventListener('click', () => handleChoice('グー'));
document.getElementById('btn-scissors').addEventListener('click', () => handleChoice('チョキ'));
document.getElementById('btn-paper').addEventListener('click', () => handleChoice('パー'));
