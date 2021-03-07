// Khai báo
let todoList = document.querySelector('.todo-list');
let todoInput = document.querySelector('#todo-input');
let buttonAdd = document.querySelector('#btn-add');
let idUpdate = null;
let isUpdate = false;
let options = document.querySelectorAll('.todo-option-item input');


//  - Mockup mảng công việc
function randomID() {
    return Math.floor(Math.random() * 100000)
}

//  - Mỗi công việc bao gồm 3 thuộc tính:
//  1. Tên công việc 2. ID công việc 3. Trạng thái công việc => id lấy ngẫu nhiên
let todos = [
    // {
    //     id: randomID(),
    //     title: 'Đi chơi',
    //     status: true
    // },
    // {
    //     id: randomID(),
    //     title: 'Làm bài tập',
    //     status: false
    // },
    // {
    //     id: randomID(),
    //     title: 'Đá bóng',
    //     status: true
    // },
]

//     - Từ Todos => render ra ngoài giao diện
//     - Todo item => status = true => thêm class 'active-todo'; input - checked
function renderItems(arr) {
    // Lọc dữ liệu
    let optionValue = getOptionSelected();
    let newTodos = [];
    switch (optionValue) {
        case 1:
            newTodos = [...arr]
            break;
        case 2:
            newTodos = arr.filter(todos => todos.status == false)
            break;
        case 3:
            newTodos = arr.filter(todos => !todos.status == false)
            break;
        default:
            newTodos = [...arr]
            break;
    }

    todoList.innerHTML = ''

    // Kiểm tra xem danh sách todos có rỗng hay không
    if (newTodos.length == 0) {
        todoList.innerHTML = '<p class="todos-empty">Không có công việc nào trong danh sách</p>'
        return
    }

    // Render danh sách ra ngoài giao diện
    else {
        for (let i = 0; i < newTodos.length; i += 1) {
            const t = newTodos[i]
            //         if (t.status == true) {
            //             todoList.innerHTML += `
            //         <div class="todo-item active-todo">
            //             <div class="todo-item-title">
            //                 <input type="checkbox" checked>
            //                     <p>${t.title}</p>
            //                 </div>
            //                 <div class="option">
            //                     <button class="btn btn-update">
            //                         <img src="./img/pencil.svg" alt="icon">
            //                     </button>
            //                         <button class="btn btn-delete">
            //                             <img src="./img/remove.svg" alt="icon">
            //                     </button>
            //                 </div>
            //             </div>
            //             `
            //         }

            //         else {
            //             todoList.innerHTML += ` 
            //     <div class="todo-item">
            //     <div class="todo-item-title">
            //         <input type="checkbox">
            //         <p>${t.title}</p>
            //     </div>
            //     <div class="option">
            //         <button class="btn btn-update">
            //             <img src="./img/pencil.svg" alt="icon">
            //         </button>
            //         <button class="btn btn-delete">
            //             <img src="./img/remove.svg" alt="icon">
            //         </button>
            //     </div>
            // </div>
            //     `}

            // Hoặc:
            todoList.innerHTML += `
                <div class="todo-item ${t.status ? 'active-todo' : ' '}">
                    <div class="todo-item-title">
                        <input type="checkbox" ${t.status ? 'checked' : ' '} onclick=toggleStatus(${t.id})>
                    <p>${t.title}</p>
                        </div >
                <div class="option">
                    <button class="btn btn-update">
                        <img src="./img/pencil.svg" alt="icon" onclick=updateTodo(${t.id})>
                            </button>
                        <button class="btn btn-delete" onclick=deleteTodo(${t.id})>
                            <img src="./img/remove.svg" alt="icon">
                            </button>
                        </div>
                    </div>
                    `
        }
    }
}

// Xóa công việc
function deleteTodo(id) {
    // Lặp qua mảng todos
    for (let i = 0; i < todos.length; i++) {
        // Tìm công việc có id = id truyền vào
        if (todos[i].id == id) {
            // Xóa công việc ra khỏi mảng todos
            todos.splice(i, 1)
        }
    }
    // Gọi lại renderItems
    setDataToLocalStorage(todos)
}

// Toggle status todo item bằng checkbox
function toggleStatus(id) {
    // Lặp qua mảng todos
    for (let i = 0; i < todos.length; i++) {
        // Tìm công việc có id = id truyền vào
        if (todos[i].id == id) {
            // Cập nhật: Đổi ngược lại status
            todos[i].status = !todos[i].status
        }
    }
    // Gọi lại renderItems
    setDataToLocalStorage(todos)
}

// Nút thêm và sửa công việc
buttonAdd.addEventListener('click', function () {
    // Lấy dữ liệu trong ô input
    let title = todoInput.value

    // Kiểm tra dữ liệu 
    for (let i = 0; i < todos.length; i++) {
        if (title == '') {
            alert('Tên công việc không được để trống!!')
            return
        }
        else if (title.toLowerCase() == todos[i].title.toLowerCase()) {
            alert('Đã có công việc trong danh sách!!')
            return
        }
    }

    // Thêm todo item mới 
    if (!isUpdate) {
        let newTodo = {
            id: randomID(),
            title: title,
            status: false,
        };
        todos.push(newTodo);
    }

    // Sửa item
    else {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == idUpdate) {
                todos[i].title = title
            }
        }
        idUpdate = null;
        isUpdate = false;
    }
    // render lại giao diện
    setDataToLocalStorage(todos)
    todoInput.value = '';
    buttonAdd.innerText = 'Thêm';
})

// Thay đổi tên công việc
function updateTodo(id) {
    // Điền tên công việc mới vào ô input => thay đổi text trong button
    // let title = todoInput.value

    // Duyệt mảng 
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todoInput.value = todos[i].title;
        }
    }
    buttonAdd.innerText = 'Sửa';
    todoInput.focus();

    idUpdate = id;
    isUpdate = true;
    setDataToLocalStorage(todos)
}

// Lọc công việc
function getOptionSelected() {
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked == true) {
            return Number(options[i].value)
        }
    }
}

options.forEach(option => {
    option.addEventListener('change', function () {
        setDataToLocalStorage(todos)
    })
});

// Thêm và sửa dữ liệu local storage

function getDataFromLocalStorage() {
    let dataLocalStorage = localStorage.getItem('todos')
    if (dataLocalStorage) {
        todos = JSON.parse(dataLocalStorage);
    }
    else {
        todos = [];
    }
    renderItems(todos)
}

function setDataToLocalStorage(arr) {
    localStorage.setItem('todos', JSON.stringify(arr));
    renderItems(arr);
}

console.log(todos)
window.onload = getDataFromLocalStorage()