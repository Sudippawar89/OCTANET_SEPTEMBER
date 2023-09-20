function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") return; 

    const taskList = document.getElementById("task-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskText}
        <button class="remove-button">Remove</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = ""; 
}

function removeTask(button) {
    const taskList = document.getElementById("task-list");
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}

document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-button");
    addButton.addEventListener("click", addTask);

    const taskList = document.getElementById("task-list");
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-button")) {
            removeTask(event.target);
        }
    });
});
