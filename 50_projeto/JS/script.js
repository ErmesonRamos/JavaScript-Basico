const addbtn = document.querySelector('#add-btn');

// Função para adicionar tarefa
function addTask() {
    //Titítulo da tarefa
    const taskTitle = document.querySelector('#task-title').value;
    if(taskTitle) {
        //Clona template
        const tamplate = document.querySelector('.template');
        const newTask = tamplate.cloneNode(true);
        
        //Adiciona título à tarefa
        newTask.querySelector('.task-title').textContent = taskTitle;

        ///remover classes desnecessarias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        //Adicionar tarefa na lista
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        //Adicionar evento de remover tarefa
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this);
        });

        //Adicionar evento de marcar tarefa como concluída
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function() {
            completeTask(this);
        });
        //Limpa campo de título
        document.querySelector('#task-title').value = '';
    }
    
}

//Função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//Função para adicionar checkmark
function completeTask(task) {
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle('done');
}


//Evento de adicionar tarefa
addbtn.addEventListener('click', function(event) {

    event.preventDefault();

    addTask();
});