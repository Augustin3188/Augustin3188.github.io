# print("What's your name?")
# name = input("> ")

# print(f"Hello {name}!")
# print("Welcome to Python")

# comment
# Câu lệnh đặt trên 1 dòng, không cần dấu ;

#  Variables (Biến) trong Python (dynamic typing)
# Khai báo biến:
my_name = "Long"
x = y = z = (1,)
a, b = 1, 2

# ''' hoặc """: sử dụng string trên nhiều dòng
a_poem = """
Phận làm trai gõ phím bình thiên hạ
Chí anh hùng click chuột định giang sơn
"""
# Quy tắc đặt tên biến:
# - Không bắt đầu bằng số
# - Không chứa ký tự đặc biệt
# - Không trùng keyword trong Python

# Quy ước đặt tên biến:
# - Tên biến: lower_case_with_underscore
# - Class hoặc Exception dùng CapitalizeCase

# ============================================================
# Các kiểu dữ liệu cơ bản (primitive)
# - int: số nguyên
# - float: số thực
# - bool: logic
# - str: chuỗi
type_int = 1
type_float = 0.5
type_bool = True

# Kiểm tra kiểu dữ liệu: type()
print(type(my_name))
print(type(type_int))
print(type(type_float))
print(type(type_bool))

# Type annotation:
# Giúp ghi chú kiểu dữ liệu của biến/hàm
a: int = 1
b: str = "Amazing"

# id(): cho biết địa chỉ vùng nhớ của biến
# với các giá trị không thể thay đổi (immutable), khi cập nhật giá trị của biến -> gán biến ở vị trí nhớ mới
print(id(type_bool))
print(id(my_name))

# Mutable: được cập nhật tại vùng nhớ hiện tại
list = [1, 2, 3]
print(id(list))
print(type(list))

# String: các ký tự trong chuỗi được đánh index tính từ 0 (từ đầu) hoặc -1 (từ cuối)

s = "hello"
# Trả về kí tự
print(s[0])
print(s[-1])

# Trả về độ dài
print(len(s))

# [a:b] Trả về từ giá trị đầu, không lấy giá trị cuối
print(s[0:2])
print(s[-3:-1])
# [a:] Trả về từ giá trị a đến cuối
print(s[-2:])

# [begin:end:step]: tương tự vòng lặp for
print(s[0::2])

# Đảo ngược chuỗi:
print(s[::-1])

# Chú ý:
print(s[-2:3])
print(s[-2:10])

# Escape Strings
# Dùng các kí tự đặc biệt: \', \", \\, \n
print("I'm Ba 'đẹp trai'")

# Formatted Strings: nhúng giá trị vào một chuỗi với f-strings (fast string)
# Cú pháp: f" abc {x}"
name = "Ba"
age = 28
greeting = f"Chào, tớ là {name}, {age} tuổi!"
print(greeting)

print(f"Chào, {name:5}")
print(f"Chào, {1:5}")
print(f"Chào, {1!s:5}")


# String Methods:
# lower(): viết thường
# upper(): viết hoa
# capitalize(): viết hoa chữ đầu tiên
# swapcase(): đổi in thường <-> hoa
# title(): viết hoa từng từ
# count(): đếm kí tự
# find(): tìm vị trí kí tự
# split(): tách các ký tự bằng dấu cách

s = "hello"
print(s.startswith("H"))
print(s.find("i"))

# ===================================================================
# Numbers: int, float, complex: số nguyên, số thực, số phức
# Python hỗ trọ số binary (0b) và hex (0x)
num = 1
num = 9.9
num = 0b111
num = 0xFFFFFF
print(bin(num))
print(hex(num))
num = 1 + 2j
print(num)

# Operators: toán tử (5 loại)
#  //: Chia lấy phần nguyên

# Cần import module math để sử dụng các p
import math

print(math.pi)
print(math.ceil(1.234))
print(math.sqrt(9))


# Type conversion:
# Trước khi thực hiện phép tính giữa 2 giá trị thuộc loại khác nhau -> phải tự chuyển về cùng 1 loại dữ liệu
x = 10
print(str(x) + "abc")

# Interaction:
# input(): nhập dữ liệu


import math

# 1. Viết chương trình yêu cầu người dùng nhập vào 2 số a, b. Tính và in ra kết quả của các phép tính(+ - * / // % ...) giữa 2 số đó
a = int(input("Nhập số a: "))
b = int(input("Nhập số b: "))
print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b}")
print(f"{a} // {b} = {a // b}")
print(f"{a} % {b} = {a % b}")
# 2. Viết chương trình yêu cầu người dùng nhập vào bán kính hình tròn(r), tính và in ra chu vi, diện tích hình tròn đó
r = int(input("Nhập bán kính hình tròn r: "))
print(f"Chu vi hình tròn = {(2 * r * math.pi)}")
print(f"Diện tích hình tròn = {((r ** 2) * math.pi)}")

# 3. Viết chương trình yêu cầu người dùng nhập vào chiều dài(l), chiều rộng(w) của hình chữ nhật,
# tính và in ra chu vi, diện tích hình chữ nhật đó
l = int(input("Nhập chiều dài hình chữ nhật l: "))
w = int(input("Nhập chiều rộng hình chữ nhật w: "))
print(f"Chu vi hình chữ nhật = {2 * (l + w)}")
print(f"Diện tích hình chữ nhật = {l * w}")

# 4. Viết chương trình yêu cầu người dùng nhập vào giá trị độ dài(length) với đơn vị là cm,
# quy đổi và in ra giá trị tương ứng ở các đơn vị km, dm, m, mm
length = int(input("Nhập giá trị độ dài (cm): "))
print(f"{length} cm = {length * 0.000001} km")
print(f"{length} cm = {length * 0.01} m")
print(f"{length} cm = {length * 0.1} dm")
print(f"{length} cm = {length * 10} mm")

# 5. Viết chương trình yêu cầu người dùng nhập vào giá trị nhiệt độ thang nhiệt Celsius(c),
# quy đổi và in ra nhiệt độ tương ứng trong thang nhiệt Fahrenheit và Kelvin
temp = int(input("Nhập giá trị nhiệt độ (C): "))
print(f"{temp} độ C = {temp * 1.8 + 32} độ F")
print(f"{temp} độ C = {temp + 273.15} độ K")

# 6. Viết chương trình yêu cầu người dùng nhập vào số phút(tính từ 0h của ngày hôm nay, giả sử số phút nhập không quá 1440),
# tính và in ra giá trị giờ: phút tương ứng(VD: 325 -> 5: 25)
minute = int(input("Nhập số phút: "))
print(f"{minute // 60}:{minute % 60}")

# 1. Viết chương trình yêu cầu người dùng nhập một chuỗi, và một giá trị số (index), hiển thị chuỗi được cắt từ 0 đến vị trí index
string = input("Nhập 1 chuỗi: ")
index = int(input("Nhập 1 số: "))
print(string[0 : (index + 1)])

# 2. Viết chương trình yêu cầu người dùng nhập tên, in ra tên viết tắt theo mẫu:
name = input("Nhập tên: ")
name_split = name.split()
find
print(name_split[0] + " " + name_split[1][0:2] + ".")
# Ví dụ:
# Nhập tên: Ba Nguyễn
# Ba Ng.

# 3. Viết chương trình yêu cầu người dùng nhập địa chỉ email, ẩn địa chỉ email và in ra theo mẫu trong ví dụ:
email = input("Nhập địa chỉ email: ")
at_sign = email.find("@")
print(email[0:2] + "..." + email[at_sign : len(email)])
# Ví dụ:

# Nhập email: banguyen@gmail.com
# ba...@gmail.com

# 4. Viết chương trình yêu cầu người dùng nhập một chuỗi, và một ký tự bất kỳ trong chuỗi đó.
# Đếm số lần xuất hiện của ký tự trong chuỗi, và hiển thị chuỗi khi thay thế ký tự đó thành 😉
string1 = input("Nhập chuỗi: ")
letter = input("Nhập ký tự: ")
print(
    f"Ký tự '{letter}' xuất hiện {string1.lower().count(letter.lower())} lần trong chuỗi '{string1}' "
)
print(string1.replace(f"{letter}", "😉"))
# Ví dụ:

# Nhập một chuỗi bất kỳ: Hello world
# Nhập một ký tự trong chuỗi: o
# Ký tự 'o' xuất hiện 2 lần trong chuỗi 'Hello world'
# Hell😉 w😉rld