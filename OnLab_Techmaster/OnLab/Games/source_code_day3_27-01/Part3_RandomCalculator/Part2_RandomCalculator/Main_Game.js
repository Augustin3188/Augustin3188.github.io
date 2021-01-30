// Truy cập
let primary = document.getElementById('primary-number');
let secondary = document.getElementById('secondary-number');
let guessEle = document.getElementById('guess');
let operatorEl = document.getElementById('operator')
let timeEl = document.querySelector('.time')
let scoreEl = document.querySelector('.score')
let highScoreEl = document.querySelector('.high-score')

// Định nghĩa biến
let firstNumber;
let secondNumber;
let total;
let operator;
let operators = ['+', '-', '*', '%'];
let score;
let highScore = 0;
let time;
let interval;

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
    score = 0;
    time = 20;
    timeEl.innerText = `${time}s`
    scoreEl.innerText = score;
    highScoreEl.innerText = highScore;

    guessEle.innerHTML = '';
    randomNumber()

    guessEle.focus()
    interval = setInterval(countDown, 1000);
}

// Đếm ngược thời gian
function countDown() {
    time--;
    if (time < 10) {
        timeEl.innerText = `0${time}s`
    }
    else {
        timeEl.innerText = `${time}s`
    }
    if (time == 0) {
        clearInterval(interval)
        timeEl.innerText = `${time}s`
        updateHighScore()
        setTimeout(init, 3000)
    }
}

// Cộng điểm
function updateScore() {
    score++;
    scoreEl.innerText = score;
}

// Lấy Highscore
function updateHighScore() {
    highScore = Math.max(score, highScore);
    highScoreEl.innerText = highScore;
}

// Xử lý khi người chơi kiểm tra kết quá
guessEle.addEventListener('keydown', function (e) {
    if (time == 0) {
        return
    }
    if (e.keyCode == 13) {
        let value = Number(this.value)
        console.log(value)
        if (value == total) {
            this.value = ''
            updateScore()
            randomNumber()
        }
        else {
            this.value = ''
            randomNumber()
        }
    }
});

window.onload = init;

