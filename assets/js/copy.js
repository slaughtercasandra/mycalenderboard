$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));



  // function generateTaskId() {
  //   const newTask = {
  //     // ? Here we use a tool called `crypto` to generate a random id for our project. This is a unique identifier that we can use to find the project in the array. `crypto` is a built-in module that we can use in the browser and Nodejs.
  //     id: crypto.randomUUID(),
  //     name: Title,
  //     type: Description,
  //     dueDate: Date,
  //     status: 'to-do',
  //   };
  //  }


//   const formEl = $('#formModal');
// const nameInputEl = $('#skill-name');
// const dateInputEl = $('#datepicker');
// const skillsListEl = $('#skills-list');


// function createTaskCard(task) {
//   const taskCard = $('<div>')
//     .addClass('card project-card draggable my-3')
//     .attr('data-task-id', task.id);
//   const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
//   const cardBody = $('<div>').addClass('card-body');
//   const cardDescription = $('<p>').addClass('card-text').text(task.Description);
//   const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
//   const cardDeleteBtn = $('<button>')
//     .addClass('btn btn-danger delete')
//     .text('Delete')
//     .attr('data-project-id', project.id);
//   cardDeleteBtn.on('click', handleDeleteProject);

// }
// if (task.dueDate && task.status !== 'done') {
// const now = dayjs();
// const taskDueDate = dayjs(project.dueDate, 'DD/MM/YYYY');

// // ? If the task is due today, make the card yellow. If it is overdue, make it red.
// if (now.isSameorbefore(taskDueDate, 'day')) {
// taskCard.addClass('bg-warning text-white');
// } else if (now.isAfter(taskDueDate)) {
// taskCard.addClass('bg-danger text-white');
// cardDeleteBtn.addClass('border-light');
// }
// }

// // ? Gather all the elements created above and append them to the correct elements.
// cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
// taskCard.append(cardHeader, cardBody);

// // ? Return the card so it can be appended to the correct lane.
// return taskCard;




