var tasksToDoEl = document.querySelector("#task-to-do");
var buttonEl = document.querySelector("#save-task");


var createTaskHandler = function() {
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "hello";
    taskItemEl.className = "task-item";
    tasksToDoEl.appendChild(taskItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);