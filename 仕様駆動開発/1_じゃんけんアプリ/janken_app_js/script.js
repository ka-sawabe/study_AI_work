// 画面読み込み時に実行するロジックの準備
document.addEventListener('DOMContentLoaded', () => {
    // ユーザーがクリックするボタンを取得
    const btnRock = document.getElementById('btn-rock');
    const btnScissors = document.getElementById('btn-scissors');
    const btnPaper = document.getElementById('btn-paper');
    
    // 結果を表示するテキスト要素を取得
    const resultText = document.getElementById('result-text');

    /**
     * ゲームをプレイする関数
     * @param {string} userChoice ユーザーが選んだ手
     */
    function playGame(userChoice) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        
        // 画面に結果を表示する
        resultText.innerText = `あなたの手: ${userChoice} / コンピュータの手: ${computerChoice} ➔ ${result}`;
    }

    // 各ボタンにイベントリスナーを追加
    btnRock.addEventListener('click', () => playGame('グー'));
    btnScissors.addEventListener('click', () => playGame('チョキ'));
    btnPaper.addEventListener('click', () => playGame('パー'));
});

/**
 * コンピュータの手をランダムに選択する関数
 * @returns {string} 'グー', 'チョキ', 'パー' のいずれか
 */
function getComputerChoice() {
    const choices = ['グー', 'チョキ', 'パー'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/**
 * ユーザーの手とコンピュータの手から勝敗を判定する関数
 * @param {string} userChoice ユーザーの手
 * @param {string} computerChoice コンピュータの手
 * @returns {string} 勝敗結果のメッセージ
 */
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'あいこです！';
    }
    
    // 勝ちのパターンを定義
    if (
        (userChoice === 'グー' && computerChoice === 'チョキ') ||
        (userChoice === 'チョキ' && computerChoice === 'パー') ||
        (userChoice === 'パー' && computerChoice === 'グー')
    ) {
        return 'あなたの勝ちです！';
    } else {
        return 'あなたの負けです...';
    }
}
