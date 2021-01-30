// Truy cập
let primary = document.getElementById('primary-number');
let secondary = document.getElementById('secondary-number');
let guessEle = document.getElementById('guess');
let operatorEl = document.getElementById('operator');

let timeEl = document.querySelector('.time');
let scoreEl = document.querySelector('.score');
let highScoreEl = document.querySelector('.high-score');

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

let ranking = [
    {
        name: 'Bùi Văn Hiên',
        avatar: 'https://techmaster.vn/media/static/crop/brp4jgc51co0c1746n90',
        score: 9,
    },
    {
        name: 'Tào Thúy Quỳnh',
        avatar: 'https://techmaster.vn/media/static/crop/brp4jgc51co0c1746n90',
        score: 10,
    },
    {
        name: 'Nguyễn Hàn Duy',
        avatar: 'https://techmaster.vn/media/static/crop/brp4jgc51co0c1746n90',
        score: 16,
    },
    {
        name: 'Trương Minh Thúy',
        avatar: 'https://techmaster.vn/media/static/crop/brp4jgc51co0c1746n90',
        score: 5,
    },
];
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
    renderRanking(ranking);

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
        addPlayerToRanking()
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
// Thêm kết quả của người chơi
function addPlayerToRanking() {
    let user = {
        name: 'Nguyễn Văn A',
        avatar: 'https://techmaster.vn/media/static/crop/brp4jgc51co0c1746n90',
        score: score,
    }

    ranking.push(user)
    renderRanking(ranking)
}

window.onload = init;

