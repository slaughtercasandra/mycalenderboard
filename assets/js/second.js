$(document).ready(function () {
  // Dynamically assign IDs to the column elements
  $('.col-12').each(function(index) {
    $(this).attr('id', 'column-' + (index + 1));
  });

  // Render the task list
  renderTaskList();

  // Make the columns droppable
  $('.lane').droppable({
    accept: '.draggable',
    drop: handleDrop,
  });

  // Datepicker initialization
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });

  // Event listener for adding a task
  $("#add").on("click", function (e) {
    e.preventDefault();
    handleAddTask();
  });

  // Event listener for deleting a task
  $(document).on("click", ".delete", handleDeleteTask);
});

let mytasks = JSON.parse(localStorage.getItem("mytasks")) || [];

function handleAddTask(event) {
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
  mytasks.push(newTask);
  localStorage.setItem("mytasks", JSON.stringify(mytasks));
  renderTaskList();
}

function renderTaskList() {
  const tasklist = JSON.parse(localStorage.getItem("mytasks")) || [];
  let toDo = $('#todo-cards');
  let inProg = $('#in-progress-cards');
  let done = $('#done-cards');

  toDo.empty();
  inProg.empty();
  done.empty();

  tasklist.forEach((task) => {
    let taskcard = createTaskCard(task);
    if (task.status === "done") {
      taskcard.appendTo(done);
    } else if (task.status === "in-progress") {
      taskcard.appendTo(inProg);
    } else {
      taskcard.appendTo(toDo);
    }
    taskcard.draggable({ revert: "invalid", containment: "#todo-lane, #in-progress-lane, #done-lane", helper: "clone" }); // Make the task cards draggable and contain them within their respective lanes
  });
}

function handleDeleteTask(e) {
  const taskId = $(this).attr('data-task-id');
  mytasks = mytasks.filter(task => task.id !== taskId);
  localStorage.setItem("mytasks", JSON.stringify(mytasks));
  renderTaskList();
}

function createTaskCard(task) {
  const taskCard = $('<div>').addClass('card mb-3').attr('id', task.id);
  const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.taskdescription);
  const cardDueDate = $('<p>').addClass('card-text').text(task.duedate);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-task-id', task.id);

  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);
  return taskCard;
}

function handleDrop(event, ui) {
  const taskId = ui.draggable.attr('id');
  const newStatus = event.target.id;

  mytasks.forEach((task) => {
    if (task.id === taskId) {
      task.status = newStatus;
    }
  });

  localStorage.setItem('mytasks', JSON.stringify(mytasks));
  renderTaskList();
}
