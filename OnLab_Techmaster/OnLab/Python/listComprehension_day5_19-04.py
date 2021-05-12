# map(func, iterables)

# 1. Viết chương trình gợi ý người dùng nhập một dãy số tùy ý (phân tách bằng dấu cách), lưu vào một list. Sắp xếp list số đã nhập, sau đó, tìm và hiển thị số lớn thứ 3 (Lưu ý trường hợp nhiều số trùng nhau)
# while True:
#     try:
#         print('Nhập một dãy số (phân tách bằng dấu cách): ')
#         l = input('> ').split(' ')
#         l = list(map(lambda i: int(i), l))
#         l.sort(reverse=True)

#         n = None
#         count = 0

#         for i in l:
#             if not n:
#                 n = i
#                 count += 1
#             elif i < n:
#                 n = i
#                 count += 1

#             if count == 3:
#                 break

#         print(f'Số lớn thứ 3 trong dãy là {n}')
#         break
#     except ValueError as e:
#         print('Dãy số không hợp lệ!')
    
       
    
# Ví dụ:

# Nhập dãy số: 1 43 53 53 32 65 43 10
# List of numbers: [1 10 32 43 43 53 53 65]
# Số lớn thứ 3 trong dãy đã nhập là 43



# 3. Viết chương trình xáo trộn các phần tử trong List (theo thứ tự ngẫu nhiên). Sử dụng hàm random.randint(a, b) để lấy số ngẫu nhiên
# import random
# print(random.randint(1, 9))

from random import shuffle
l = [1, 2, 3, 4, 5 , 6]
shuffle(l)
print(l)

# Ví dụ:

# l = [1, 2, 3, 4, 5, 6]

# Kết quả
# l = [5, 2, 4, 6, 1, 3]


# 4. Viết chương trình cộng giá trị của 2 hoặc nhiều List chứa các số nguyên 
# (lưu ý số lượng phần tử trong các List có thể khác nhau, cộng giá trị các phần tử có index tương ứng).
l1 = [1, 2, 3]
l2 = [3, 4, 5, 6]
l3 = [5]

# def combine_list(*args):
#     max_len = max(*map(lambda l: len(l), args))

#     for i in range(0, max_len): 
#         sum = 0
#         result = []

#         for l in args:
#             if i < len(l):
#                 sum += l[i]
        
#                 result.append(sum)
#     return result

# print(combine_list(l1, l2, l3))

def combine_list1(*args):
    max_len = max(*map(lambda l: len(l), args))
    return [l[i] for i in range(0, max_len) for l in args if i < len(l)]
print('-----------')
print(combine_list1(l1, l2, l3))
# Ví dụ:

# l1 = [1, 2, 3]
# l2 = [3, 4, 5, 6]
# l3 = [5]

# Kết quả
# l4 = [9, 6, 8, 6]


# 5. Viết chương trình tìm giá trị lớn nhất, nhỏ nhất trong 3 List (số nguyên) cho trước

# Ví dụ:

# l1 = [1, 2, 3]
# l2 = [3, 4, 5, 6]
# l3 = [5]

# Số lớn nhất: 6
# Số nhỏ nhất: 1

# 6. Viết chương trình chuyển đổi một số nguyên thành một binary list tương ứng
# VD: 10 -> [1, 0, 1, 0]
# try:
#         n = int(input('Nhập 1 số nguyên: '))
#         l = [int(i) for i in bin(n)[2:]]
#         print(f'Giá trị {n} trong hệ nhị phân: {l}')
# except TypeError as e:
#     print(e)




# 7. Viết chương trình sắp xếp các chữ số của một số sao cho giá trị sau khi sắp xếp là nhỏ nhất 
# (lưu ý giữ nguyên số lượng các chữ số)
n = 23434004
l = list(str(n))
l.sort()

if int(l[0]) == 0:
    for index, value in enumerate(l):
        if int(value) != 0:
            l[0], l[1] = l[index], l[0]
            break

n = "".join(l)
print(n) 
# VD: 23434004
# result 20033444


# 9. Viết chương trình tìm các cặp giá trị trong một List số nguyên sao cho tổng giá trị của chúng bằng một giá trị chỉ định.
#  Các cặp giá trị đặt trong một list of list
def f(_list, n):
    result = []
    
    for i in range(0, len(_list) - 1):
        for j in range(i + 1, len(_list)):
                if _list[i] + _list[j] == n:
                    result.append([_list[i], _list[j]])

    return result

def g(_list, n):
    return [[_list[i], _list[j]] for i in range(0, len(_list) - 1) for j in range(i + 1, len(_list)) if _list[i] + _list[j] == n]
 
print(f([2, 3, 4, 5, 6], 7))
print(g([2, 3, 4, 5, 6], 7))

# Ví dụ:
# l = [2, 3, 4, 5, 6], n = 9
# Kết quả
# l = [[3, 6], [4, 5]]

# 10. Viết chương trình tách một list các giá trị hỗn hợp(số, chuỗi) thành các tuples chứa các giá trị 
# dựa theo kiểu dữ liệu của chúng, các tuples đặt trong một list

# Ví dụ:
# l = [1, 2, 3, 'a', 'b', 'c']
# Kết quả
# l = [(1, 2, 3), ('a', 'b', 'c')]

# 11. Viết chương trình tìm số lần xuất hiện nhiều nhất của một ký tự trong một chuỗi(không tính dấu cách)

# Ví dụ:
# Xin chào các bạn, mình tên là Ba
# ()

# filter(): lọc phần tử trong list hteo điều kiện được chỉ định

# List Comprehensions: cú pháp thay thế cho map và filter (ngắn gọn hơn)
# [expression for i in iterable]
s = 'abc'
[c for c in s]
print([c for c in s])
print([c.upper() for c in s])

s = '12345'
list(s)
print(list(filter(lambda c: int(c) % 2 == 0, list(s))))

result = []
for c in s:
    if int(c) % 2 == 0:
        result.append(int(c))

[int(c) for c in s if int(c) % 2 == 0]

# Viết chương trình lọc các giá trị True trong list
l = ['a', 'b', 1, 2, 'c', True, False]
print([i for i in l if type(i) == int and i == 1])