let docTitle = document.title;
    window.addEventListener("blur", () =>{
    document.title = "Volte Aqui ಥ_ಥ";
})
    window.addEventListener("focus", () =>{
    document.title = docTitle;
})

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    if (taskValue === '') return;

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskValue;

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = () => editTask(taskInput, taskValue);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = () => taskList.removeChild(li);

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

function editTask(taskInput, oldValue) {
    const newTaskValue = prompt("Edite a tarefa:", oldValue);
    if (newTaskValue) {
        const tasks = document.querySelectorAll('.task-list li');
        tasks.forEach(task => {
            if (task.firstChild.textContent === oldValue) {
                task.firstChild.textContent = newTaskValue;
            }
        });
    }
}