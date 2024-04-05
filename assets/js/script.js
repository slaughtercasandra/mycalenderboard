$(document).ready(function () {
  // Dynamically assign IDs to the column elements
  $('.col-12').each(function(index) {
    $(this).attr('id', 'column-' + (index + 1));
  });

  // Render the task list
  renderTaskList();

  // Make the lanes droppable
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
    taskcard.addClass('draggable'); // Add draggable class to the task card
  });

  // Make the newly added task cards draggable
  $('.draggable').draggable({
    revert: "invalid",
    helper: "clone",
    cursor: "move"
  });

  // Make all lanes droppable
  $('.lane').droppable({
    accept: '.draggable',
    drop: handleDrop,
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

  // Parse due date using Day.js
  const dueDate = dayjs(task.duedate);

  // Check if the task description contains keywords indicating past due, overdue, due today, or due soon
  const description = task.taskdescription.toLowerCase();
  if (description.includes('past due') || description.includes('over due')) {
    taskCard.addClass('pastdue');
  } else if (description.includes('due today') || description.includes('due soon')) {
    taskCard.addClass('duetoday');
  }

  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);
  return taskCard;
}


 
function handleDrop(event, ui) {
  const taskId = ui.draggable.attr('id');
  const newStatus = event.target.id;

  // Find the column where the card is dropped
  const droppedColumnId = $(event.target).closest('.lane').attr('id');

  // Check if the dropped card already exists in the new lane
  const existingCard = $(`#${droppedColumnId}-cards #${taskId}`);

  if (existingCard.length === 0) {
    mytasks.forEach((task) => {
      if (task.id === taskId) {
        task.status = newStatus;
      }
    });

    // Update the dropped card's status and re-render the task list
    localStorage.setItem('mytasks', JSON.stringify(mytasks));
    renderTaskList();

    // Move the dropped card into the correct column
    ui.draggable.appendTo(`#${droppedColumnId}-cards`);
  }
}
