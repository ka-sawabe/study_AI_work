document.getElementById('calculateBtn').addEventListener('click', function() {
    const price = parseFloat(document.getElementById('priceInput').value);
    if (isNaN(price)) {
        document.getElementById('resultArea').innerText = '正しい数値を入力してください';
        return;
    }
    const taxIncluded = Math.floor(price * 1.1);
    document.getElementById('resultArea').innerText = '税込み価格: ' + taxIncluded + '円';
});