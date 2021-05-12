# Conditional Statements

# age = 28
# if age >= 20:
#     print('Adult')
# elif age >= 13:
#     print('Teenager')
# else ...

# Lưu ý: không sử dụng ngoặc nhọn mà sử dụng lề (indentation) để giới hạn câu lệnh
#      : elif = else if
#      : pass: xác định 1 hàm/câu lệnh rỗng
#      : True, False viết hoa chữ cái đầu

n = int(input("Nhập một số N: "))

if n % 2 == 0:
    print(f"{n} là số chẵn")
else:
    print(f"{n} là số lẻ")

# Logical operators:
# 1. not: phủ định kết quả của biểu thức
# 2. or: kết hợp điều kiện, biểu thức đúng khi MỘT trong các điều kiện đúng
# 3. and: kết hợp điều kiện, biểu thức đúng khi TẤT CẢ điều kiện đúng

# Python hỗ trợ chuỗi toán tử so sánh:
#  18 <= x <= 25

# Ternary Operator: Toán tử 3 ngôi (rút gọn của if else) - thường dùng để gán giá trị
# x = value1 if condition else value2
# nhiều điều kiện: x = value1 if condition1 else v2
#                             if condition2 else v3
#                             if ...  

print('========================================================')
# For loops: Lặp qua bất kì đối tượng có thể lặp (iterable):string, list, với phương thức đặc biệt __next__()
# Magic method: __next__(), __iter__()

# For in: lọc trực tiếp qua giá trị: 
for char in 'Mr Ba':    
    print(char)


# Hàm range() trả về 1 đối tượng iterable => dùng để lặp câu lệnh theo số lần chỉ định

# range(n): 0 -> n-1
# Trả về giá trị từ 0 đến 4
for n in range(5): 
    print(n)

# range(x, y): x-> y-1 
# Trả về giá trị từ 1 đến 5
for n in range(1, 6):
    print(n)

# range(a, b, c): a -> b-1, a + c
for n in range(5, -5, -1):
    print(n)

for i in range(10, 1, -2): 
    print(i)

print('========================================================')

# Break, Continue: 
# break: Dừng vòng lặp
for n in range(10):
    if n > 5: 
        break
    else: 
        print(n)

# continue: dừng lần lặp hiện tại, chuyển tới lần lặp tiếp theo
for n in range(10):
    if n % 2 == 0:
        continue
    else:
        print(n)

print('========================================================')
# For else: Nếu thực hiện hết câu lệnh mà không gặp break -> else sẽ được thực thi. Nếu có break -> Không thực thi else
for name in ['Ba', 'Béo', 'Ú']:
    if name =='Ba':
        print('Found')
        break
else:
    print('Not found')

n = input('Nhập 1 số: ')
for i in range(2, int(n)):
    if int(n) % i == 0:
        print(f'{n} không phải số nguyên tố')
        break
else: 
    print(f'{n} là số nguyên tố')

# While loops: tương tự như for, không xác định số lần lặp; cũng hỗ trợ else như for
# Trong Python chỉ có for-in iterable và while

print('==================================================================')
# 1. Viết chương trình yêu cầu nhập một số nguyên n, kiểm tra và in ra số đó có chia hết cho cả 3 và 5 hay không
print('1. Viết chương trình yêu cầu nhập một số nguyên n, kiểm tra và in ra số đó có chia hết cho cả 3 và 5 hay không')
n = int(input('Nhập số nguyên n: '))
if (n % 15 == 0):
    print(f'{n} chia hết cho cả 3 và 5')
else: 
    print(f'{n} không chia hết cho cả 3 và 5')
# Ví dụ:

# Nhập một số nguyên: 5
# 5 không chia hết cho cả 3 và 5


print('--------------------------------')
# 2. Viết chương trình yêu cầu nhập 3 số a, b, c. Kiểm tra và in ra số lớn nhất
print('2. Viết chương trình yêu cầu nhập 3 số a, b, c. Kiểm tra và in ra số lớn nhất')
a = int(input('Nhập số a: '))
b = int(input('Nhập số b: '))
c = int(input('Nhập số c: '))
if a >= b >= c or a >= c >= b:
    print(f'Số lớn nhất trong 3 số [{a} {b} {c}] là {a}')
elif b >= a >= c or b >= c >= a:
    print(f'Số lớn nhất trong 3 số [{a} {b} {c}] là {b}')
elif c >= a >= b or c >= b >= a:
    print(f'Số lớn nhất trong 3 số [{a} {b} {c}] là {c}')
# Ví dụ:

# Nhập số a: 1
# Nhập số b: 2
# Nhập số c: 3
# Số lớn nhất trong 3 số [1 2 3] là 3
print('--------------------------------')

# 3. Viết chương trình yêu cầu nhập 3 số a, b, c tương ứng với độ dài 3 cạnh tam giác. Kiểm tra và in ra 3 số có 
# tạo thành một tam giác hợp lệ hay không
print('3. Viết chương trình yêu cầu nhập 3 số a, b, c tương ứng với độ dài 3 cạnh tam giác. Kiểm tra và in ra 3 số có tạo thành một tam giác hợp lệ hay không')
a = int(input('Nhập số a: '))
b = int(input('Nhập số b: '))
c = int(input('Nhập số c: '))

if a + b > c and a + c > b and b + c > a:
    print(f'[{a} {b} {c}] là 1 tam giác hợp lệ')
else:
    print(f'[{a} {b} {c}] không phải 1 tam giác hợp lệ')
# Ví dụ:

# Nhập cạnh a: 1
# Nhập cạnh b: 3
# Nhập cạnh c: 3
# [1 3 3] là một tam giác hợp lệ
print('--------------------------------')

# 4. Viết chương trình yêu cầu nhập 3 số a, b, c. Kiểm tra và in ra 3 số là dãy tăng dần (a < b < c), giảm dần (a > b > c) hay không
print('4. Viết chương trình yêu cầu nhập 3 số a, b, c. Kiểm tra và in ra 3 số là dãy tăng dần (a < b < c), giảm dần (a > b > c) hay không')
a = int(input('Nhập số a: '))
b = int(input('Nhập số b: '))
c = int(input('Nhập số c: '))
if a > b > c:
    print(f'[{a} {b} {c}] là dãy giảm dần')
elif a < b < c:
    print(f'[{a} {b} {c}] là dãy tăng dần')
else: 
    print(f'[{a} {b} {c}] không phải dãy tăng dần hay giảm dần')
# Ví dụ:

# Nhập số a: 1
# Nhập số b: 2
# Nhập số c: 3
# [1 2 3] là dãy tăng dần
print('--------------------------------')

# 5. Viết chương trình yêu cầu nhập một ký tự, kiểm tra và in ra ký tự đó có thuộc bảng alphabet (a-zA-Z) hay không
print('5. Viết chương trình yêu cầu nhập một ký tự, kiểm tra và in ra ký tự đó có thuộc bảng alphabet (a-zA-Z) hay không')
letter = input('Nhập một ký tự: ')
if 'a' <= letter <= 'z' or 'A' <= letter <= 'Z':
    print(f'{letter} thuộc bảng alphabet')
else:
    print(f'\'{letter}\' không thuộc bảng alphabet')

# Ví dụ:

# Nhập một ký tự: g
# 'g' thuộc bảng ký tự alphabet
print('--------------------------------')

# 6. Viết chương trình yêu cầu nhập một tháng trong năm, kiểm tra và in ra mùa tương ứng
print('6. Viết chương trình yêu cầu nhập một tháng trong năm, kiểm tra và in ra mùa tương ứng')
month = int(input('Nhập một tháng bất kỳ: '))
if month < 1 or month > 12:
    print(f'{month} không phải tháng hợp lệ')
elif 1<= month <= 3:
    print(f'Tháng {month} là mùa xuân')
elif 3< month <= 6:
    print(f'Tháng {month} là mùa hè')
elif 6< month <= 9:
    print(f'Tháng {month} là mùa thu')
else:
    print(f'Tháng {month} là mùa đông')
# Ví dụ:

# Nhập một tháng bất kỳ: 5
# Tháng 5 là mùa hè
print('--------------------------------')

# 7. Viết chương trình yêu cầu nhập một số, in ra bảng cửu chương của số đó
print('7. Viết chương trình yêu cầu nhập một số, in ra bảng cửu chương của số đó')
num = int(input('Nhập 1 số từ 1 đến 9: '))
for x in range(1, 11):
    print(f'{num} x {x} = {num * x}')
# Ví dụ:

# Nhập một số (1 - 9): 5
# 5 x 1 = 5
# 5 x 2 = 10
# ...
print('--------------------------------')

# 8. Viết chương trình yêu cầu nhập một số nguyên dương n, kiểm tra các số trong khoảng từ 1 - n
# - Nếu số chia hết cho 3 in ra Fizz
# - Nếu số chia hết cho 5 in ra Buzz
# - Nếu số chia hết cho 3 và 5 in ra FizzBuzz
# - Nếu không chia hết cho cả 3 và 5 in ra số đó
print('8. Viết chương trình yêu cầu nhập một số nguyên dương n, kiểm tra các số trong khoảng từ 1 - n')
num = int(input('Nhập 1 số nguyên dương: '))
if num % 3 == 0 and num % 5 == 0:
    print('FizzBuzz')
elif num % 3 == 0 and num % 5 != 0: 
    print('Fizz')
elif num % 3 != 0 and num % 5 == 0: 
    print('Buzz')
else:   
    print(num)
# Ví dụ:

# Nhập một số nguyên dương: 10
# 1
# 2
# Fizz
# 4
# Buzz
# ...
print('--------------------------------')

# 9. Viết chương trình yêu cầu người dùng nhập số nguyên dương n tính tổng tất cả các số chia hết cho 3 và 5 
# trong khoảng từ 1 -> n
print('9. Viết chương trình yêu cầu người dùng nhập số nguyên dương n tính tổng tất cả các số chia hết cho 3 và 5 trong khoảng từ 1 -> n')
n = int(input('Nhập số nguyên dương n: '))
sum = 0
for x in range(1, n + 1):
    if x % 15 == 0:
        sum = sum + x
print(f'Tổng các số chia hết cho 3 và 5 trong khoảng từ 1 đến {n} là {sum}')
# Ví dụ:

# Nhập một số nguyên dương: 10
# Tổng các số từ 1 đến 10 là 55

# 10. Viết chương trình yêu cầu người dùng nhập một loạt số, tính và in ra trung bình cộng của các số đó
# - Cho phép nhập số lượng số bất kỳ
# - In ra kết quả ngay lập tức với mỗi số nhập vào
# - Dừng nhập và in ra kết quả khi người dùng nhập 'q' hoặc 'c'
total = 0
count = 0
string = ''

while True: 
    n = input('Nhập một số: ')
    if n == 'q' or n == 'c':
        print('Exit!')
        break
    total = total + int(n)
    count = count + 1
    string = string + ' ' + n
    print(f'Dãy số đã nhập: {string}')
    print(f'Trung bình cộng các số: {total / count}')
# Ví dụ:

# Nhập một số: 2
# Dãy số đã nhập: 2
# Trung bình cộng các số: 2.0
# Nhập một số: 5
# Dãy số đã nhập: 2 5
# Trung bình cộng các số: 3.5
# ...
# Nhập một số: q
# Exit!

# 13. Viết nearest(a, b) kiểm tra và trả về số gần với 100 nhất
# VD: nearest(105, 99) -> 99
a = int(input('Nhập số a: '))
b = int(input('Nhập số b: '))
if abs(100 - a) < abs(100 - b):
    print(f'nearest({a}, {b}) -> {a}')
else: 
    print(f'nearest({a}, {b}) -> {b}')

