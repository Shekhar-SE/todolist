document.getElementById('addTaskButton').addEventListener('click', function() {
  let taskInput = document.getElementById('taskInput');
  let task = taskInput.value.trim();
  if (task !== '') {
    let taskList = document.getElementById('taskList');
    let listItem = document.createElement('li');
    listItem.textContent = task;

    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
  }
});
