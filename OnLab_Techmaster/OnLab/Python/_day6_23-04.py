# zip(): Kết hợp các List thành 1 list mới, các phần tử mới là 'tuples'
l1 = list(zip("abc", [1, 2, 3], ["Ba", "Béo"]))
print(l1)
# Nếu các list ko cùng độ dài, zip sẽ bỏ qua các phần tử thừa

# List unpacking: gán giá trị trong List cho cùng lúc nhiều biến (số lượng biến == số lượng phần tử trong List)
numbers = [1, 2, 3]
a, b, *_ = numbers
print(a)
print(b)
# *_ giống *args trong javascript: gán tất cả phần tử còn lại

# Tuples: Sử dụng ngoặc tròn (), giống 1 list nhưng không được phép thay đổi giá trị phần tử (read-only)
t = ()
print(type(t))
t = 1,
print(type(t))

# Swapping Variables: 
x = 1
y = 10
x, y = y, x


# Sets: Sử dụng ngoặc nhọn {}. Tập hợp các phần tử không có index (chỉ mục) và giá trị các phần tử là DUY NHẤT (không trùng nhau)
numbers = [1, 2, 2 ,1]
unique = set(numbers)
print(unique)

# Set hỗ trợ 1 số toán tử
s1 = {1, 2, 3}
s2 = {1, 4}
print(s1 | s2) # union(): Lấy tất cả phần tử
print(s1 & s2) # intersection(): Lấy phần giao
print(s1 - s2) # difference(): Lấy phần khác nhau (của set bên trái)
print(s1 ^ s2) # symmetric_difference(): Lấy phần khác nhau (của cả 2 sets)

s = {1, 2}
ss = {1, 3}
print(s | ss)
print(s.union(ss))
print(s & ss)
print(s - ss)
print(s ^ ss)
print(s)
print('--------------------------------------')
s.difference_update(ss) # Cập nhật trực tiếp kết quả vào set
print(s)

# 1 số phương thức khác của set: add(), discard(), update(), pop(), issubset(): Kiểm tra tập con, issuperset(): Kiểm tra tập cha
s.add(3)
print(s)

print(s.issubset(ss))
print('--------------------------------------')

# Dictionaries: Sử dụng ngoặc nhọn {}. Là tập hợp các cặp key : value, mỗi key ánh xạ (mapped) đến 1 value tương ứng (tương tự object)
d = {'x' : 1, 'y' : 2}

print(d)
print(d.get('x'))
print(d['x'])

d = dict(x=1, y=2, f=lambda x: x *10)
print(d['f'](1))

# Khi truy cập một key không tồn tại sẽ gây lỗi
# -> Kiểm tra key trước khi thao tác: sử dụng get() 
def get(key, default = None):
    if key in d:
        return d[key]
    else: 
        return default

print(get('tt'))
print(get('tt', 'Nothing'))

print(d)
print(d.pop('f'))
print(d.popitem()) # Xóa cặp key : value ở cuối dictionary, trả về 1 tuple
print(d)

# Lặp qua dict thường sử dụng for để lặp qua key
# Hoặc sử dụng items(): trả về một tuple chứa (key, value)


# Dictionary Comprehensions: Dùng với Set và Dictionary (Không dùng với Tuples)
# Sử dụng {} để rút gọn cú pháp map/filter
s = {x * 2 for x in range(5)}
print(s)

d = {x: x * 2 for x in range(5)}
print(d)


# Generator Expressions: Khởi tạo 1 giá trị mới mỗi vòng lặp, không lưu trữ toàn bộ giá trị -> chiếm ít bộ nhớ
# from sys import getsizeof
# values = (x for x in range(10000000))
# for v in values:
#     pass
# print(getsizeof(values))
# Chỉ chiếm 12 bytes, ít hơn nhiều so với dùng values = []


# Unpacking Operator: Tương tự ...[] trong javascript: dùng dấu * để tách đối tượng iterable ra thành từng giá trị
number = [1, 2, 3]
print(*number)

values = [*range(3), *'Ba']
print(values)

first = [1, 2]
second = ['a', 'b']
combined = [*first, *second, *'Hello']
print(combined)
# Khi kết hợp 2 dicts, sử dụng **, các giá trị trùng nhau sẽ bị ghi đè

# Tìm ký tự xuất hiện nhiều nhất (không tính dấu ' ')
sentence = 'This is a common interview question'
def max_char(s):
    a = [s.count(i) for i in list(s) if i != ' ']
    max = a[0]
    for j in a:
        if a[j] > max:
            max = a[j]
            ind = j
    return f'Ký tự xuất hiện nhiều nhất là {list(s)[ind]}'
print(max_char(sentence))

# CHỮA:
def max_char1(s):
    l = dict()
    for char in s:
        if char != ' ':
            if char in l:
                l[char] += 1
            else:
                l[char] = 1
    l = list(l.items())
    l.sort(key=lambda item: item[1])
    print(l)
    return l.pop()

char, count = max_char1(sentence)
print(f'Ký tự có số lần xuất hiện nhiều nhất trong chuỗi \'{sentence}\' là: \'{char}\' - {count} lần')

print('----------------------------------------')
# 12. Viết chương trình hợp nhất 2 dictionaries

# print(d1 ^ d2)
# print(d1 & d2)
def concat_dict(d1, d2):
    keys = list(set([*d1.keys(), *d2.keys()]))
    return {i: d1.get(i, 0) + d2.get(i, 0) for i in keys}
    # result = dict()
    # for i in keys:
    #     total = d1.get(i, 0) + d2.get(i, 0)
    #     result[i] = total

    # return result

print(concat_dict({'a': 1, 'b': 2}, {'a': 2, 'c': 1}))
# VD:
# d1 = {a: 1, b: 2}
# d2 = {a: 2, c: 1}
# => d3 = {a: 3, b: 2, c:1}


# 13. Viết chương trình in dictionaries theo dạng bảng
def print_as_table(d):
    column = d.keys()
    rows = list(zip(*d.values()))

    header = ''
    for col in column:
        header += f'{col:^12}'
    print(header)
    
    for row in rows:
        r = ''
        for v in row:
            r += f'{v:^12}'
        print(r)

print(print_as_table({'Column 1': [1, 2], 'Column 2': [3, 4]}))
# VD: {C1: [1, 2], C2: [3, 4]}
# C1  C2
#  1   3
#  2   4
