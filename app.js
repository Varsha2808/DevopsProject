const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const clearListButton = document.getElementById('clearList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

function removeTask(button) {
    taskList.removeChild(button.parentElement);
}

clearListButton.addEventListener('click', () => {
    taskList.innerHTML = '';
});
