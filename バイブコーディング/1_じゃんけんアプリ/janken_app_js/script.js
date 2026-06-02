let winCount = 0;
let loseCount = 0;
let tieCount = 0;
let playCount = 0;
const maxPlays = 5;

function playGame(userChoice) {
    if (playCount >= maxPlays) return;

    playCount++;
    const choices = ['グー', 'チョキ', 'パー'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
        result = 'あいこです！';
        tieCount++;
    } else if (
        (userChoice === 'グー' && computerChoice === 'チョキ') ||
        (userChoice === 'チョキ' && computerChoice === 'パー') ||
        (userChoice === 'パー' && computerChoice === 'グー')
    ) {
        result = 'あなたの勝ちです！';
        winCount++;
    } else {
        result = 'あなたの負けです…';
        loseCount++;
    }

    document.getElementById('result').innerHTML = `
        <p>あなた: ${userChoice}</p>
        <p>コンピュータ: ${computerChoice}</p>
        <p>結果: ${result}</p>
        <p>残り ${maxPlays - playCount} 回</p>
    `;

    document.getElementById('score').innerHTML = `
        <p>勝ち: ${winCount} | 負け: ${loseCount} | あいこ: ${tieCount}</p>
    `;

    if (playCount >= maxPlays) {
        const buttons = document.querySelectorAll('.buttons button');
        buttons.forEach(button => button.disabled = true);
        document.getElementById('resetButton').style.display = 'block';
        document.getElementById('result').innerHTML += '<p>ゲーム終了！</p>';
    }
}

function resetGame() {
    winCount = 0;
    loseCount = 0;
    tieCount = 0;
    playCount = 0;
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => button.disabled = false);
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('result').innerHTML = '<p>ボタンを押して勝負！（残り5回）</p>';
    document.getElementById('score').innerHTML = '<p>勝ち: 0 | 負け: 0 | あいこ: 0</p>';
}
