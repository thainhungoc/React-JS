"use strict";
let todoList = [
    { id: 1, title: "Học JavaScript", isCompleted: true },
    { id: 2, title: "Học HTML", isCompleted: false },
    { id: 3, title: "Học C", isCompleted: false }
];
const displayTodoList = () => {
    let html = todoList.map(task => `
        <li class="${task.isCompleted ? "completed" : ""}">
            ${task.title}
        </li>
    `).join("");
    // document.getElementById("todoList").innerHTML = html;
};
const changeStatus = (id) => {
    const task = todoList.find(task => task.id === id);
    if (task) {
        task.isCompleted = !task.isCompleted;
        displayTodoList();
    }
};
displayTodoList();
