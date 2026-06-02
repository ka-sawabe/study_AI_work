function playGame(userChoice) {
    const choices = ['グー', 'チョキ', 'パー'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
        result = 'あいこです！';
    } else if (
        (userChoice === 'グー' && computerChoice === 'チョキ') ||
        (userChoice === 'チョキ' && computerChoice === 'パー') ||
        (userChoice === 'パー' && computerChoice === 'グー')
    ) {
        result = 'あなたの勝ちです！';
    } else {
        result = 'あなたの負けです…';
    }

    document.getElementById('result').innerHTML = `
        <p>あなた: ${userChoice}</p>
        <p>コンピュータ: ${computerChoice}</p>
        <p>結果: ${result}</p>
    `;
}
