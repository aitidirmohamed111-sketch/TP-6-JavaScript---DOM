const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
    const taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Veuillez entrer une tâche !");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<span class="task-text">${taskValue}</span>
        <div class="actions">
            <button class="done-btn">✔</button>
            <button class="delete-btn">🗑</button>
        </div>`;
    li.querySelector('.done-btn').addEventListener('click', function() {
        li.querySelector('.task-text').classList.toggle('completed');
    });
    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = "";
});