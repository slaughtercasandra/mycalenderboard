
  // Initialize date picker
  $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
  });

  // Retrieve tasks from local storage or initialize an empty array
  let mytasks = JSON.parse(localStorage.getItem("mytasks")) || [];

  // Event listener for adding a new task
  $("#add").on("click", function (e) {
      e.preventDefault();
      handleAddTask();
  });

  // Initialize draggable behavior for task cards
  $(".project-card").draggable({
      revert: "invalid",
      zIndex: 100,
      scroll: true,
      cursor: "move"
  });

  // Initialize droppable behavior for swim lanes
  $(".lane").droppable({
      accept: ".project-card",
      drop: function(event, ui) {
          $(this).find(".card-body").append(ui.draggable);
      }
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

  mytasks.push(newTask);
  localStorage.setItem("mytasks", JSON.stringify(mytasks));

  renderTaskList(); // Render updated task list
}

function renderTaskList() {
  let tasklist = JSON.parse(localStorage.getItem("mytasks")) || [];
  let toDo = $('#todo');
  let inProg = $('#in-progress');
  let done = $('#done');

  // Clear existing task cards
  toDo.empty();
  inProg.empty();
  done.empty();

  tasklist.forEach((task) => {
      let taskcard = createTaskCard(task);
      if (task.status === "done") {
          done.append(taskcard);
      } else if (task.status === "in-progress") {
          inProg.append(taskcard);
      } else {
          toDo.append(taskcard);
      }
  });
}

function createTaskCard(task) {
  const taskCard = $('<div>')
      .addClass('card project-card draggable my-3')
      .attr('id', task.id);

  const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.taskdescription);
  const cardDueDate = $('<p>').addClass('card-text').text(task.duedate);
  const cardDeleteBtn = $('<button>')
      .addClass('btn btn-danger deleteTaskButton')
      .text('Delete')
      .attr('data-task-id', task.id);

  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  // Add class based on task status
  if (task.taskdescription.toLowerCase() === "in progress") {
      taskCard.addClass("in-progress"); // Add custom class for styling
  }

  return taskCard;
}

function handleDeleteTask() {
  const taskId = $(this).attr('data-task-id');
  mytasks = mytasks.filter(task => task.id !== taskId);
  localStorage.setItem("mytasks", JSON.stringify(mytasks));
  renderTaskList(); // Render updated task list
}
