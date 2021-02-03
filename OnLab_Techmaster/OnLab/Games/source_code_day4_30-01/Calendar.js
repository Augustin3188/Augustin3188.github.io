// Truy cập
let monthName = document.querySelector('.month')
let yearName = document.querySelector('.year')
let buttonNext = document.querySelector('.btn-next')
let buttonPrevious = document.querySelector('.btn-prev')
let dateContainer = document.querySelector('.date-container')

// Khai báo
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentDate = new Date().getDate();

// Thay đổi info (tháng và năm)
function displayInfo() {
    // Hiển thị tên tháng
    let currentMonthName = new Date(currentYear, currentMonth).toLocaleString("en-us", { month: "long" });
    monthName.innerText = currentMonthName;

    // Hiển thị năm
    yearName.innerText = currentYear;

    // Hiển thị ngày và ngày bắt đầu của tháng
    renderDate()

    // Active ngày hiện tại

}

buttonNext.addEventListener('click', function () {
    if (currentMonth == 11) {
        currentMonth = 0;
        currentYear = currentYear + 1;
    }
    else {
        currentMonth = currentMonth + 1;
    }
    displayInfo()
})

buttonPrevious.addEventListener('click', function () {
    if (currentMonth == 0) {
        currentMonth = 11;
        currentYear = currentYear - 1;
    }
    else {
        currentMonth = currentMonth - 1;
    }
    displayInfo()
})

// Lấy số ngày của 1 tháng
function getDaysInMonth() {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
}

// Render ngày
function renderDate() {
    dateContainer.innerHTML = '';

    let startDay = getStartDayInMonth()
    for (let i = 0; i < startDay; i = i + 1) {
        dateContainer.innerHTML += `
        <div class='day'></div>
        `;
    }

    let daysInMonth = getDaysInMonth();
    for (let i = 0; i < daysInMonth; i = i + 1) {
        dateContainer.innerHTML += `
        <div class= 'day ${activeCurrentDate(i + 1)}'>${i + 1}</div>
        `;
    }
}

// Lấy ngày bắt đầu của tháng
function getStartDayInMonth() {
    return new Date(currentYear, currentMonth, 1).getDay();
}

// Active ngày hiện tại
function activeCurrentDate(day) {
    let day1 = new Date().toDateString();
    let day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1 == day2 ? 'active' : ''
}

window.onload = displayInfo