// script.js
function calculateSum() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    if (isNaN(number1) || isNaN(number2)) {
        alert('Будь ласка, введіть дійсні числа.');
        return;
    }

    const sum = number1 + number2;
    document.getElementById('result').textContent = `Сума: ${sum}`;
    alert(`Сума двох чисел: ${sum}`);
}
