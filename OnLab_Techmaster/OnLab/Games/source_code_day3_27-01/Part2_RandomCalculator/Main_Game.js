// Truy cập
let primary = document.getElementById('primary-number');
let secondary = document.getElementById('secondary-number');
let guessEle = document.getElementById('guess');
let operatorEl = document.getElementById('operator')

// Định nghĩa biến
let firstNumber;
let secondNumber;
let total;
let operator;
let operators = ['+', '-', '*', '%'];

// Random số và hiển thị
function randomNumber() {
    firstNumber = Math.floor(Math.random() * 10);
    secondNumber = Math.floor(Math.random() * 10 + 1);
    operator = operators[Math.floor(Math.random() * operators.length)];

    total = eval(`${firstNumber} ${operator} ${secondNumber}`);
    primary.innerText = firstNumber;
    secondary.innerText = secondNumber;
    operatorEl.innerText = operator;
}

// Khởi tạo game
function init() {
    guessEle.innerHTML = '';
    randomNumber()
}

// Xử lý khi người chơi kiểm tra kết quá
guessEle.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        let value = Number(this.value)
        console.log(value)
        if (value == total) {
            console.log('true');
            this.value = ''
            randomNumber()
        }
        else {
            console.log('false');
            this.value = ''
            return
        }
    }
});

window.onload = init;

