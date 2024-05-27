// let todoList :{
//     id:number,
//     title:string,
//     isCompleted:boolean,
// };
// todoList = [
//     {id: 1,
//      title: "Học javaScript",
//      isCompleted: true
//     },
//     {id: 2,
//      title: "Học HTML",
//      isCompleted: false
//     },
//     {id: 3,
//      title: "Học C",
//      isCompleted: false
//     }
// ]
interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}

let todoList: Task[] = [
    { id: 1, title: "Học JavaScript", isCompleted: true },
    { id: 2, title: "Học HTML", isCompleted: false },
    { id: 3, title: "Học C", isCompleted: false }
];

const displayTodoList = (): void => {
    let html = todoList.map(task => `
        <li class="${task.isCompleted ? "completed" : ""}">
            ${task.title}
        </li>
    `).join("");
    // document.getElementById("todoList").innerHTML = html;
};

const changeStatus = (id: number): void => {
    const task = todoList.find(task => task.id === id);
    if (task) {
        task.isCompleted = !task.isCompleted;
        displayTodoList();
    }
};

displayTodoList();
