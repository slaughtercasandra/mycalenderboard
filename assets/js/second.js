
$('#datepicker').datepicker({
  changeMonth: true,
  changeYear: true,
});

let mytasks = JSON.parse(localStorage.getItem("task"))
// let tasklist = localStorage.getItem("list");

$("#add").on("click", function (e) {
  e.preventDefault();
  handleAddTask();
});

function handleAddTask() {
  const taskTitle = $('#TaskTitle').val();
  const dueDate = $('#datepicker').val();
  const description = $('#taskdescription').val();

  const newTask = {
    id: crypto.randomUUID(),
    title: taskTitle,
    duedate: dueDate,
    taskdescription: description,
    status: 'todo',
  };
  let tasklist = JSON.parse(localStorage.getItem("mytasks")) || []
  mytasks.push(newTask);
  localStorage.setItem("mytasks", JSON.stringify(mytasks));
}

function renderTaskList() {
  let tasklist = JSON.parse(localStorage.getItem(mytasks))
  let toDo = $('#todo');
  let inProg = $('#in-progress');
  let done = $('#done');

  toDo.empty();
  inProg.empty();
  done.empty();

  tasklist.forEach((task) => {
    let taskcard;
    if (task.status === "done") {
      taskcard = createTaskCard(task);
      done.append(taskcard).addClass('todo');
    } else if (task.status === "in-progress") {
      taskcard = createTaskCard(task);
      inProg.append(taskcard).addClass("todo");
    } else {
      taskcard = createTaskCard(task);
      toDo.append(taskcard);
    }
  });
}

function createTaskCard(task) {
  const taskCard = $('<div>')
    .addClass('taskcard draggable my-3')
    .attr('id', task.id);

  const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.taskdescription);
  const cardDueDate = $('<p>').addClass('card-text').text(task.duedate);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-task-id', task.id);
  cardDeleteBtn.on('click', handleDeleteTask);

  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  if (task.taskdescription.toLowerCase() === "pastdue") {
    taskCard.addClass("pastdue");
  }
  if (task.taskdescription.toLowerCase() === "duetoday") {
    taskCard.addClass("duetoday");
  }
  return taskCard;

}

// $(".card project-card draggable my-3").droppable({
//   accept: ".project-card",
//   drop: function (event, ui) {
//     $(this).append(ui.draggable);
//   }
// });
// $('.taskcard draggable my-3').droppable({
//   accept: '.draggable',
// });



// function handleDeleteTask() {
//   const taskId = $(this).attr('data-task-id');
//   mytasks = mytasks.filter(task => task.id !== taskId);
//   localStorage.setItem("mytasks", JSON.stringify(mytasks));
// }


// function displayProjects() {
//   const tasks = JSON.parse(localStorage.getItem('mytasks')) || [];
//   projects.forEach(project => {
//     const projectElement = document.createElement('div');
//     projectElement.textContent = project.name;
//     // Add additional details to the projectElement as needed
//     document.getElementById('project-list').appendChild(projectElement);
//   });


// for (let project of projects) {
//   if (project.status === 'to-do') {
//     todoList.append(createProjectCard(project));
//   } else if (project.status === 'in-progress') {
//     inProgressList.append(createProjectCard(project));
//   } else if (project.status === 'done') {
//     doneList.append(createProjectCard(project));
//   }