// 画面読み込み時に実行するロジックの準備
document.addEventListener('DOMContentLoaded', () => {
    // ユーザーがクリックするボタンを取得
    const btnRock = document.getElementById('btn-rock');
    const btnScissors = document.getElementById('btn-scissors');
    const btnPaper = document.getElementById('btn-paper');
    
    // 表示用要素を取得
    const matchCountText = document.getElementById('match-count');
    const resultText = document.getElementById('result-text');
    const scoreText = document.getElementById('score-text');

    // ゲーム状態を管理する変数
    let matchCount = 0; // 対戦回数
    let wins = 0;       // 勝ち数
    let losses = 0;     // 負け数
    let draws = 0;      // あいこ数
    const maxMatches = 5; // 最大対戦回数

    /**
     * ゲームをプレイする関数
     * @param {string} userChoice ユーザーが選んだ手
     */
    function playGame(userChoice) {
        if (matchCount >= maxMatches) return; // 5回終了時は何もしない

        matchCount++;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        
        // スコア更新
        if (result === 'あなたの勝ちです！') wins++;
        else if (result === 'あなたの負けです...') losses++;
        else draws++;
        
        // 画面に結果を表示する
        resultText.innerText = `あなたの手: ${userChoice} / コンピュータの手: ${computerChoice} ➔ ${result}`;
        scoreText.innerText = `勝ち: ${wins}, 負け: ${losses}, あいこ: ${draws}`;
        
        // 残り回数の更新
        const remaining = maxMatches - matchCount;
        matchCountText.innerText = remaining > 0 ? `あと ${remaining} 回対戦できます` : '対戦終了！';

        // 5回終了時の処理
        if (matchCount >= maxMatches) {
            btnRock.disabled = true;
            btnScissors.disabled = true;
            btnPaper.disabled = true;
        }
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
