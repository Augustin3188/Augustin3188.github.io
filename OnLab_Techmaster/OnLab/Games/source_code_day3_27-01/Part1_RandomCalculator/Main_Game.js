// Truy cập
let primary = document.getElementById('primary-number');
let secondary = document.getElementById('secondary-number');
let guessEle = document.getElementById('guess');

// Định nghĩa biến
let firstNumber;
let secondNumber;
let total;

// Random số và hiển thị
function randomNumber() {
    firstNumber = Math.floor(Math.random() * 10);
    secondNumber = Math.floor(Math.random() * 10);

    total = firstNumber + secondNumber;
    primary.innerText = firstNumber;
    secondary.innerText = secondNumber
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
        if (value == total) {
            randomNumber()
            this.value = ''
        }
        else {
            this.value = ''
            return
        }


    }
});

window.onload = init;