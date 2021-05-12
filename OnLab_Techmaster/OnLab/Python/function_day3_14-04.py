# Function: 
#  Cú pháp khai báo hàm:
def funcname(parameter_list):
    pass 
# Tham số (parameter) khai báo các biến được dùng bên trong hàm
# Có 2 loại hàm:
#  - Thực thi một nhiệm vụ nào đó
#  - Tính toán và trả về một giá trị

# Giá trị mặc định trả về là 'None'. Dùng return để dừng hàm
# Khai báo hàm nên sử dụng type annotation và docstring để ghi chú rõ chức năng của hàm


# Scope:
# - File scope: Biến toàn cục: khai báo bên ngoài tất cả function
# - Function scope: Biết cục bộ: khai báo bên trong function

# Python không có block scope
#  Mặc định việc thay đổi giá trị biến toàn cục bên trong hàm không ảnh hưởng đến biến toàn cục với từ khóa 'global' 
# -> Không nên làm

# Default parameter, keyword arguments:
#  Khai báo giá trị mặc định trong khi khai báo biến function

# 14. Viết hàm sum(value1, unit1, value2, unit2) nhận vào 2 tham số value1 và value2 là giá trị độ dài, 
# unit1 và unit2 là đơn vị độ dài. Quy đổi giá trị unit2 về cùng đơn vị với unit1, tính và in ra tổng giá trị
# VD: sum(1, 'km', 100, 'm') -> 1.1 km
def to_km(value, unit):
    if unit == 'km':
        return value

    if unit == 'm':
        return value / 1000

    if unit == 'dm':
        return value / 10000

    if unit == 'cm':
        return value / 100000

    if unit == 'mm': 
        return value / 1000000    

def km_to(value, unit):
    if unit == 'km':
        return value

    if unit == 'm':
        return value * 1000

    if unit == 'dm':
        return value * 10000

    if unit == 'cm':
        return value * 100000

    if unit == 'mm': 
        return value * 1000000    


def sum(v1 : float = '0', u1 : str = 'm', v2 : float = '0', u2 : str = 'km') -> str:
    print(f'{km_to(to_km(v1, u1) + to_km(v2, u2), u1)} {u1}')
    

sum(1, 'km', 500, 'm')
sum(2, 'km', 300, 'dm')
sum(24, 'mm', 13, 'cm')

# 9. Viết hàm print_number_pattern(n) in ra theo mẫu sau

def print_number_pattern(n : int) -> str:
    for i in range(1, n + 1):
        string = ''

        for j in range(i, 0, -1):
            string += f'{j:<3}' 
# < > ^ căn chỉnh text 
        print(string)
    
print_number_pattern(5)
# Ví dụ:

# n = 5
# 1
# 2  1
# 3  2  1
# 4  3  2  1
# 5  4  3  2  1

# 7. Viết hàm in ra chữ số đầu và cuối của một số, VD: 12345 -> 15, lưu ý, không sử dụng phương thức của str
def first_and_last_number(n : int) -> int:
    last_number = n % 10
    first_number = None
    temp = n

    while temp > 0:
        first_number = temp % 10
        temp -= first_number
        temp //= 10

    print (f'First number of {n} is {first_number}')
    print (f'Last number of {n} is {last_number}')

first_and_last_number(12345)
first_and_last_number(31209716312656)


# Debugging: đặt break points -> chọn phần debug bên trái

# Exceptions:
# Cần xử lý lỗi (exceptions) và ngăn chặn việc chương trình bị crash bằng cách dùng try:
# Tìm hiểu python exceptions (ValueError, IndexError, TypeError, ZeroDivisionError, IOError, ...)
try: 
    pass
except expression as indentifier:
    pass
else:
    pass
finally:
    pass

# while True:
#     try:
#         n = int(input('Nhập N: '))
#         print('N là số chẵn') if n % 2 == 0 else 'N là số lẻ'
#         n += 'abc'

#         break

#     except ValueError as e:
#         print('Số không hợp lệ')

#     except TypeError as e:
#         print('Cộng chuỗi thất bại')
# print(123 + 'a')

# Raising Exceptions:
def sum(a, b):
    if type(a) == int and type(b) == int:
        return a + b
    else:
        raise TypeError('a and b must be number')

try:
    print(sum(1, 'n'))
except TypeError as e:
    print(e)

def sum1(n):
    if n <= 0:
        raise ValueError('Invalid \'n\', must be greater than 0')
    else:
        return n * n

print(sum1(0))