let btodoList = [
    {id: 1,
     title: "Học javaScript",
     isCompleted: true
    },
    {id: 2,
     title: "Học HTML",
     isCompleted: false
    },
    {id: 3,
     title: "Học C",
     isCompleted: false
    }
]
// hàm hiển thị
// cu phap arrow function : (param)=> {codes}
const displayTodoList= ()=>{
//B1 tao ra doan HTMl de hien thi danh sach vieecj can lam
// moi cviec can lam phai tao ra mot the li tuowng ung
let html = "";
// dung for de duyet cac phan tu va tao ra cac the Li de noi cac chuoi tuong ung
 todoList.forEach((todo)=>{
    html+= `<li class="list-group-item d-flex justify-content-between">
    <span ${todo.isCompleted ? 'class="text-decoration-line-through"' : ''}>${todo.title}</span>
    ${todo.isCompleted ? '<i class="fa-regular fa-rectangle-xmark text-danger " onclick="change('+todo.id+')"></i>': '<i class="bi bi-check-circle text-success" onclick="change('+todo.id+')"></i>'}</li>
    `

 })
 document.getElementById("todoList").innerHTML = html;

}
displayTodoList();

// hàm thêm mới


// hoan thanh roi thi xoa con chua hoan thanh thi ...
const change =(id)=>{
    // lay ra cong viec theo id
    let todo = todoList.find((todo)=> todo.id == id);
    if(todo.isCompleted){
// da hoan thanh cong viec thi xoa cong viec 
todoList= todoList.filter(todo => todo.id != id )
    }else{
        // neu chua hoan thanh thi cap nhat trang thai ve true da hoan thanh cong viec
        todo.isCompleted= true; 
    }
    displayTodoList();
}

//hàm cập nhật trạngt hái