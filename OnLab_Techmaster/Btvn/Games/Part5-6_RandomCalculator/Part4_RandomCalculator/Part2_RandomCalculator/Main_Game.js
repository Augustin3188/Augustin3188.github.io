// Truy cập
let primary = document.getElementById('primary-number');
let secondary = document.getElementById('secondary-number');
let guessEle = document.getElementById('guess');
let operatorEl = document.getElementById('operator');

let timeEl = document.querySelector('.time');
let scoreEl = document.querySelector('.score');
let highScoreEl = document.querySelector('.high-score');

// Start Game
let startGame = document.querySelector('#start-game')
let startButton = document.querySelector('#btn-start-game')
let userName = document.querySelector('#user-name')
let userAvatar = document.querySelector('#user-avatar')


// Game
let game = document.querySelector('#game')

// End Game
let endGame = document.querySelector('#end-game')
let exitButton = document.querySelector('.btn-exit-game')
let playAgainButton = document.querySelector('.btn-play-again')
let result = document.querySelector('#result')
let wrong = document.querySelector('#wrong')

let listPlayerEle = document.querySelector('.list-player');
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
let wrongAnswer = 0;

let ranking = [];


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
    startGame.style.display = 'none';
    game.style.display = 'flex';
    endGame.style.display = 'none';
    score = 0;
    wrongAnswer = 0
    time = 20;
    timeEl.innerText = `${time}s`
    scoreEl.innerText = score;
    highScoreEl.innerText = highScore;

    guessEle.innerHTML = '';
    randomNumber();
    getDataFromLocalStorage();

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
        updateHighScore();
        // localStorage.setItem('score', score)
        addPlayerToRanking();
        wrong.innerText = wrongAnswer
        result.innerText = score;
        end()
    }
}

// Cộng điểm
function updateScore() {
    score++;
    scoreEl.innerText = score;
}

// Đếm câu sai
function updateWrong() {
    wrongAnswer++;
    wrong.innerText = wrongAnswer;
}

// Lấy Highscore
function updateHighScore() {
    highScore = Math.max(score, highScore);
    highScoreEl.innerText = highScore;
}

// Xử lý khi người chơi kiểm tra kết quả
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
            updateWrong()
            randomNumber()
        }
    }
});

// Xử lý bảng xếp hạng
// Render bảng xếp hạng
function renderRanking(arr) {
    let sortArr = arr.sort(function (a, b) {
        return b.score - a.score
    })
    listPlayerEle.innerHTML = '';
    for (let i = 0; i < sortArr.length; i = i + 1) {
        const p = arr[i];
        listPlayerEle.innerHTML += `
        <div class="list-item">
        <div class="list-rank">${i + 1}</div>
        <div class="list-info">
            <img src="${p.avatar}" alt="avatar">
            <div class="info">
                <span class="name">${p.name}</span>
            </div>
        </div>
        <div class="list-score">
            <span class="top-item-icon"><i class="fa fa-star" aria-hidden="true"></i></span>
            <span class="top-item-point">${p.score}</span>
        </div>
    </div>
        `
    }
}

// Lấy data từ localStorage để render
// CHỮA:
function getDataFromLocalStorage() {
    let dataLocalStorage = localStorage.getItem('ranking');
    if (dataLocalStorage) {
        ranking = JSON.parse(dataLocalStorage)
    }
    else {
        ranking = [];
    }

    renderRanking(ranking)
}

// Set data
// CHỮA:
function setDataToLocalStorage(arr) {
    localStorage.setItem('ranking', JSON.stringify(arr));
    renderRanking(arr);
}


// Thêm kết quả của người chơi
function addPlayerToRanking() {
    let user = {
        name: userName.value,
        avatar: userAvatar.value,
        score: score,
    }

    ranking.push(user);
    setDataToLocalStorage(ranking)
}

function start() {
    startGame.style.display = 'flex';
    game.style.display = 'none';
    endGame.style.display = 'none';
}

function end() {
    startGame.style.display = 'none';
    game.style.display = 'none';
    endGame.style.display = 'flex';
}


startButton.addEventListener('click', function () {
    // Điền tên và ảnh
    if (userName.value == '' || userAvatar.value == '') {
        alert('Hãy điền đầy đủ thông tin!!!')
        return
    }

    // localStorage
    localStorage.setItem('name', userName.value)
    localStorage.setItem('avatar', userAvatar.value)
    init()
})

exitButton.addEventListener('click', function () {
    start()
})

playAgainButton.addEventListener('click', function () {
    init()
})

window.onload = start

