// OBJECT
// Khai báo obj rỗng
let objEmpty = {}

// Khai báo obj có giá trị (cặp key : value)
let user = {
    // Key tĩnh: đặc tính
    name: "Nguyễn Văn A",
    age: 1992,
    isStatus: true,
    skill: ['PHP', 'Java', 'Golang'],
    address: {
        city: 'Hà Nội'
    },
    // Key động: hành động (function)
    sayHello: function () {
        console.log('Xin chào các bạn');
    },
    changeAge: function () {
        this.age = 2021 - this.age;
    },
    // Dùng 'this.' để thay thế cho các object đang được tương tác/sử dụng 
    changeName: function (newName) {
        this.name = newName
    },
};

// Lấy giá trị trong object 
console.log(user.name);
console.log(user.skill);
console.log(user.skill[1]);
console.log(user.address.city);

console.log(user['name']);
console.log(user['skill']);

// Thay đổi giá trị 
user.name = "Ngô Văn B"
console.log(user)
user.email = 'abc@gmail.com'
console.log(user.email)

// Xóa key
delete user.email;
console.log(user)

user.sayHello()
user.changeAge()
user.changeName('Trần Thị C')
console.log(user)
console.log(this)

console.log('-----------------------------------------------------')
// ---------------------------------------------------------------
// METHODS trong OBJECT
// 1. Lấy ra danh sách key => Kết quả là 1 Array chứa các keys
console.log(Object.keys(user));

// 2. Lấy ra danh sách value => Kết quả là 1 Array chứa các values
console.log(Object.values(user));

// 3. Kiểm tra xem 1 key có tồn tại trong Object không => true / false
console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('name1'));

// Bài tập
let grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
]

// 1. Tính thứ hạng trung bình của cả lớp
function average(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
        result = result + arr[i].grade
    }
    return (result / arr.length)
}
console.log('Bài 1')
console.log(average(grades))

// 2. Tính thứ hạng trung bình của Nam trong lớp
function averageMale(arr) {
    let result = 0;
    let male = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i].sex == 'M') {
            male = male + 1
            result = result + arr[i].grade
        }
    }
    return (result / male)
}
console.log('Bài 2')
console.log(averageMale(grades))

// 3. Tính thứ hạng trung bình của Nữ trong lớp
function averageFemale(arr) {
    let result = 0;
    let female = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i].sex == 'F') {
            female = female + 1
            result = result + arr[i].grade
        }
    }
    return (result / female)
}
console.log('Bài 3')
console.log(averageFemale(grades))

// 4. Tìm thứ hạng cao nhất của Nam trong lớp
function highestMale(arr) {
    let maleArr = []
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i].sex == 'M') {
            maleArr.push(arr[i])
        }
    }
    return highest(maleArr)
}
console.log('Bài 4')
console.log(highestMale(grades))

// 5. Tìm thứ hạng cao nhất của Nữ trong lớp
function highestFemale(arr) {
    let femaleArr = []
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i].sex == 'F') {
            femaleArr.push(arr[i])
        }
    }
    return highest(femaleArr)
}
console.log('Bài 5')
console.log(highestFemale(grades))

// 6. Tìm thứ hạng thấp nhất của Nam trong lớp
function lowestMale(arr) {
    let maleArr = []
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i].sex == 'M') {
            maleArr.push(arr[i])
        }
    }
    return lowest(maleArr)
}
console.log('Bài 6')
console.log(lowestMale(grades))

// 7. Tìm thứ hạng thấp nhất của Nữ trong lớp
function lowestFemale(arr) {
    let femaleArr = []
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i].sex == 'F') {
            femaleArr.push(arr[i])
        }
    }
    return lowest(femaleArr)
}
console.log('Bài 7')
console.log(lowestFemale(grades))

// 8. Tìm thứ hạng cao nhất của cả lớp
function highest(arr) {
    let highest = arr[0].grade;
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i].grade < highest) {
            highest = arr[i].grade
        }
    }
    return highest
}
console.log('Bài 8')
console.log(highest(grades))

// 9. Tìm thứ hạng thấp nhất của cả lớp
function lowest(arr) {
    let lowest = arr[0].grade;
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i].grade > lowest) {
            lowest = arr[i].grade
        }
    }
    return lowest
}
console.log('Bài 9')
console.log(lowest(grades))

// 10. Lấy ra danh sách tất cả học viên Nữ trong lớp
function findFemale(arr) {
    let femaleArr = []
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i].sex == 'F') {
            femaleArr.push(arr[i])
        }
    }
    return femaleArr
}
console.log('Bài 10')
console.log(findFemale(grades))

// 11. Sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function alphabetArrange(arr) {
    let nameArr = []
    for (let i = 0; i < arr.length; i = i + 1) {
        console.log()
        // nameArr.push(arr[i].name)
    }
    console.log(nameArr.sort())
}
console.log('Bài 11')
// console.log(alphabetArrange(grades))
// 12. Sắp xếp thứ hạng học viên theo chiều giảm dần
// 13. Lấy ra học viên nữ có tên bắt đầu bằng "J"
// 14. Lấy ra top 5 người có thứ hạng cao nhất

console.log('-------------------------------------------------')
// -----------------------------------------------------------
function sum(a, b) {
    return a + b
}
// Khai báo function sử dụng ARROW FUNCTION
let sum1 = (a, b) => a + b
let sayHello = () => console.log('Xin chào');
let sayHello1 = name => console.log(`Xin chào ${name}`)
let findMax = arr => {
    let Max = arr[0]
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i] > Max) {
            Max = arr[i]
        }
    }
    return Max
}

console.log(sum1(3, 4));
sayHello()
sayHello1('Nguyễn Văn A')
console.log(findMax([1, 2, -3, 12, 5, 9, -8, 4]))

// METHOD duyệt mảng: 
// forEach: thao tác với từng phần tử trong mảng
let number = [1, 2, 3, 4, 5];
number.forEach((value, index) => {
    console.log(value, index)
})

let result = 0
number.forEach((value, index) => {
    if (value % 2 == 0) {
        result += value
    }
})
console.log(result)


// map: Thao tác với các phần tử của mảng. Trả về mảng mới có độ dài = mảng ban đầu
let number1 = number.map(ele => ele * 2)
console.log(number1);

// filter === for - if: Lọc với điều kiện
let number2 = number.filter(ele => ele > 2)
console.log(number2);

// find: Trả về phần tử đầu tiên thỏa mãn điều kiện
let number3 = number.find(ele => ele > 2)
console.log(number3);

// findIndex: Trả về chỉ số của phần tử đầu tiên thỏa mãn điều kiện
let number4 = number.findIndex(ele => ele > 2)
console.log(number4);

// every:
// Tất cả phần tử thỏa mãn điều kiện=> True
// Chỉ 1 phần tử không thỏa mãn điều kiện => False
let number5 = number.every(ele => ele > 0)
console.log(number5)

let number6 = number.every(ele => ele > 1)
console.log(number6)

// some: 
// Chỉ cần 1 phần tử thỏa mãn điều kiện => True
let number7 = number.some(ele => ele > 4.5)
console.log(number7)

let number8 = number.some(ele => ele > 5);
console.log(number8)

console.log('------------------------------------------------')
// Bài tập
// Cho 1 mảng các chuỗi. Viết function lọc ra các phần tử có độ dài lớn nhất
let findMaxLengthElement = arr => {
    // Lấy ra mảng độ dài
    let arrLength = arr.map(ele => ele.length)
    // Tìm độ dài lớn nhất
    let maxLength = Math.max(...arrLength)
    return arr.filter(ele => ele.length == maxLength)
}
console.log(findMaxLengthElement(['abc', 'aa', 'cd', 'x', 'xyz']))

// Xóa phần tử bị trùng nhau trong mảng
let removeDuplicate = arr => arr.filter((v, i) => arr.indexOf(v) == i)

console.log(removeDuplicate([1, 2, 5, 2, 6, 2, 5]))

// Tìm giá trị lớn thứ 2 trong mảng
let findMax2 = arr => {
    // Xóa các giá trị bị trùng 
    let newArr = removeDuplicate(arr)
    // return newArr.sort()[newArr.length - 2]
    // hoặc: SORT GIẢM DẦN
    let sortArr = newArr.sort((a, b) => b - a)
    return sortArr[1]
}
console.log(findMax2([1, 2, 7, 3, 8, 1, 2, 5, 8, 8]))