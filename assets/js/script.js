var tasksToDoEl = document.querySelector("#task-to-do");
var buttonEl = document.querySelector("#btnid");


var createTaskHandler = function() {
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "hello";
    taskItemEl.className = "task-item";
    tasksToDoEl.appendChild(taskItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);