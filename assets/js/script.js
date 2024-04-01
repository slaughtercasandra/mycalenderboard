// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
        const taskCard = $('<div>')
          .addClass('card project-card draggable my-3')
          .attr('data-task-id', task.id);
        const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
        const cardBody = $('<div>').addClass('card-body');
        const cardDescription = $('<p>').addClass('card-text').text(task.Description);
        const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
        const cardDeleteBtn = $('<button>')
          .addClass('btn btn-danger delete')
          .text('Delete')
          .attr('data-project-id', project.id);
        cardDeleteBtn.on('click', handleDeleteProject);
      
}
if (project.dueDate && project.status !== 'done') {
    const now = dayjs();
    const taskDueDate = dayjs(project.dueDate, 'DD/MM/YYYY');

    // ? If the task is due today, make the card yellow. If it is overdue, make it red.
    if (now.isSame(taskDueDate, 'day')) {
      taskCard.addClass('bg-warning text-white');
    } else if (now.isAfter(taskDueDate)) {
      taskCard.addClass('bg-danger text-white');
      cardDeleteBtn.addClass('border-light');
    }
  }

  // ? Gather all the elements created above and append them to the correct elements.
  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  // ? Return the card so it can be appended to the correct lane.
  return taskCard;

  function printProjectData() {
    const projects = readProjectsFromStorage();
  
    // ? Empty existing project cards out of the lanes
    const todoList = $('#todo-cards');
    todoList.empty();
  
    const inProgressList = $('#in-progress-cards');
    inProgressList.empty();
  
    const doneList = $('#done-cards');
    doneList.empty();
  
    // ? Loop through projects and create project cards for each status
    for (let project of projects) {
      if (project.status === 'to-do') {
        todoList.append(createProjectCard(project));
      } else if (project.status === 'in-progress') {
        inProgressList.append(createProjectCard(project));
      } else if (project.status === 'done') {
        doneList.append(createProjectCard(project));
      }
    }

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
        //     $('#skills-list').sortable({
        //       placeholder: "sortable-placeholder",
        //       forcePlaceholderSize: "true",
        //     });
        //   });
        
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });
  
  // Add interaction here
  //
//   $(function() {
//     $('#skills-list').sortable({
//       placeholder: "sortable-placeholder",
//       forcePlaceholderSize: "true",
//     });
//   });


// $(function(){
//     $('#myForm').on('submit', function(e){
//       e.preventDefault();
//       $.post('http://www.somewhere.com/path/to/post', 
//          $('#myForm').serialize(), 
//          function(data, status, xhr){
//            // do something here with response;
//          });
//     });
// });
// // Get the modal
const modal = document.getElementById("#formModal");

// Get the button that opens the modal
const btn = document.getElementById("btn btn-success");

// Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

//   const formEl = $('#guestbook-form');
// const nameInputEl = $('#name-input');
// const commentInputEl = $('#comment-input');
// const guestBookDisplayEl = $('#guest-book-display');

// const printGuestData = function (name, comment) {
//   const cardColumnEl = $('<div>');
//   cardColumnEl.addClass('col-12 col-sm-4 col-md-3');

//   const cardEl = $('<div>');
//   // Add a class of .custom-card
//   cardEl.addClass('card h-100 custom-card');
//   cardEl.appendTo(cardColumnEl);

//   // Add a class of .custom-card-header
//   const cardName = $('<h5>').addClass('card-header custom-card-header').text(name);
//   cardName.appendTo(cardEl);

//   const cardBodyEl = $('<div>');
//   cardBodyEl.addClass('card-body');
//   cardBodyEl.appendTo(cardEl);

//   const cardComment = $('<p>').addClass('card-text').text(comment);
//   cardComment.appendTo(cardBodyEl);

//   guestBookDisplayEl.append(cardColumnEl);
// };

// const handleFormSubmit = function (event) {
//   event.preventDefault();

//   const nameInput = nameInputEl.val();
//   const commentInput = commentInputEl.val();

//   if (!nameInput || !commentInput) {
//     console.log('You need to fill out the form!');
//     return;
//   }

//   printGuestData(nameInput, commentInput);

//   // reset form
//   nameInputEl.val('');
//   commentInputEl.val('');
// };

// formEl.on('submit', handleFormSubmit);
