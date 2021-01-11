// Những methods của String trùng với Array
let str = "Hello World";

// indexOf - lastIndexOf
console.log(str.indexOf("lo"));
console.log(str.indexOf("loo"));

console.log(str.lastIndexOf("o"));

// includes
console.log(str.includes("lo"));
console.log(str.includes("loo"));

console.log("---------------------------")

// slice

console.log(str.slice(0, 5));
console.log(str.slice(6));
console.log(str.slice());
console.log(str.slice(str.length - 1));
console.log(str.slice(-1));
console.log(str.slice(-5));

console.log("---------------------------")

// substring
console.log(str.substring(0, 5));
console.log(str.substring(6));
console.log(str.substring());
console.log(str.substring(str.length - 1));

console.log("---------------------------")

// substr(a, b) a: vị trí bắt đầu; b: độ dài cần cắt (substract)
console.log(str.substr(0, 5));

// in thường - in hoa chữ
console.log(str.toLowerCase())
console.log(str.toUpperCase())

// cộng chuỗi concat
console.log(str.concat(" abc", " haha", " hihi"));

// loại bỏ khoảng trắng ở đầu và cuối chuỗi 
let str1 = "      hihi     "
console.log(str1)
console.log(str1.trim())

console.log("---------------------------")

// charAt(n) : Trả về chuỗi/ký tự nằm ở vị trí `n`
console.log(str.charAt(0));
console.log(str.charAt(1));

console.log("---------------------------")

// split(x): Chuyển từ string thành array, với x: Ký tự dùng để phân cách (Lấy từ trong string)
console.log(str.split(" "));
console.log(str.split(""));
console.log(str.split("o"));
console.log(str.split("k"));

console.log("---------------------------")

// BÀI TẬP
// 1. Kiểm tra chuỗi có nằm trong chuỗi còn lại không
// function điền 2 chuỗi => include
function checkString(a, b) {
    return a.includes(b)
}
console.log("Bài 1")
console.log(checkString("abcdefgh", "ab"))
console.log(checkString("abcdefgh", "ag"))

// 2. Rút ngắn chuỗi; thêm ... ở cuối chuỗi
// function điền 1 chuỗi => slice => concat
function shortenString(a) {
    if (a.length > 8) {
        let b = (a.slice(0, 8))
        return b.concat("...")
    }
    else {
        return a
    }
}
console.log("Bài 2")
console.log(shortenString("Xin chào các bạn"))
console.log(shortenString("Hello"))

// 3. Chuyển chuỗi thành viết hoa ký tự đầu tiên
// Lowercase => Đổi string thành array với dấu " " => chọn ký tự vị trí 0 của string trong array => Uppercase => Quay về string
function capitalizeString(a) {
    let a1 = a.toLowerCase().split(" ");
    for (let i = 0; i < a1.length; i = i + 1) {
        a1[i] = a1[i].charAt(0).toUpperCase() + a1[i].slice(1);
    }
    return a1.join(" ")
}
console.log("Bài 3")
console.log(capitalizeString("chÀo MừnG đẾn với techMaster"))

// 4. Viết function sao chép chuỗi n lần, ngăn cách = dấu gạch ngang
// function điền chuỗi + số lần sao chép =>
let repeatString = ""
function repeatStrings(str, n) {
    for (i = 0; i < n; i = i + 1) {
        repeatString = repeatString + `-${str}`
    }
    return repeatString.slice(1)
}
console.log("Bài 4")
console.log(repeatStrings("Techmaster", 6))
