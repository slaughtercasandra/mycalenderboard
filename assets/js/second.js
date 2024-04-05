
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
  let mytasks = JSON.parse(localStorage.getItem("mytasks")) || [];
  mytasks.push(newTask);
  localStorage.setItem("mytasks", JSON.stringify(mytasks));
  renderTaskList() 
}

function renderTaskList() {
  const tasklist =  JSON.parse(localStorage.getItem("mytasks")) || [];
  let toDo = $('#todo');
  let inProg = $('#in-progress');
  let done = $('#done');
  console.log(toDo, inProg, done)
  // toDo.empty();
  // inProg.empty();
  // done.empty();
  
  tasklist.forEach((task) => {
    console.log(task)
    let taskcard;
    if (task.status === "done") {
      taskcard = createTaskCard(task);
      done.append(taskcard).addClass('done');
    } else if (task.status === "in-progress") {
      taskcard = createTaskCard(task);
      inProg.append(taskcard).addClass('in-progress');
    } else {
      taskcard = createTaskCard(task);
      toDo.append(taskcard);
    }
  });
}

$('.draggable').draggable({
  opacity: 0.7,
  zIndex: 100,
  // ? This is the function that creates the clone of the card that is dragged. This is purely visual and does not affect the data.
  helper: function (e) {
    // ? Check if the target of the drag event is the card itself or a child element. If it is the card itself, clone it, otherwise find the parent card  that is draggable and clone that.
    const original = $(e.target).hasClass('ui-draggable')
      ? $(e.target)
      : $(e.target).closest('.ui-draggable');
    // ? Return the clone with the width set to the width of the original card. This is so the clone does not take up the entire width of the lane. This is to also fix a visual bug where the card shrinks as it's dragged to the right.
    return original.clone().css({
      width: original.outerWidth(),
    });
  },
});


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
  cardDeleteBtn.on('click', handleDeleteTask());

    // ? Sets the card background color based on due date. Only apply the styles if the dueDate exists and the status is not done.
    if (task.dueDate && task.status !== 'done') {
      const now = dayjs();
      const taskDueDate = dayjs(task.dueDate, 'DD/MM/YYYY');
  
      // ? If the task is due today, make the card yellow. If it is overdue, make it red.
      if (now.isSame(taskDueDate, 'day')) {
        taskCard.addClass('bg-warning text-white');
      } else if (now.isAfter(taskDueDate)) {
        taskCard.addClass('bg-danger text-white');
        cardDeleteBtn.addClass('border-light');
      }
    }
  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  return taskCard;

// function handleDeleteTask() {
//   const taskId = $(this).attr('data-task-id');
//   mytasks = mytasks.filter(task => task.id !== taskId);
//   localStorage.setItem("mytasks", JSON.stringify(mytasks));
// }

}



  // ? Remove project from the array. There is a method called `filter()` for this that is better suited which we will go over in a later activity. For now, we will use a `forEach()` loop to remove the project.
//   tasks.forEach((task) => {
//     if (task.id === taskId) {
//       tasks.splice(tasks.indexOf(task), 1);
//     }
//   });

//   // ? We will use our helper function to save the projects to localStorage
//   saveTaskssToStorage(tasks);

//   // ? Here we use our other function to print projects back to the screen
//   printTaskLists();
// }



  // if (task.taskdescription.toLowerCase() === "pastdue") {
  //   taskCard.addClass("pastdue");
  // }
  // if (task.taskdescription.toLowerCase() === "duetoday") {
  // askCard.addClass("duetoday");






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