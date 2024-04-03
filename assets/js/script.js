// Retrieve tasks and nextId from localStorage
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

let mytasks = JSON.parse(localStorage.getItem("task"))


// const button = document.getElementById('#add')
$("#add").on("click", function (e) {
  e.preventDefault();
  // button.addEventListener("click" , (event) => {
  console.log("title has changed")
  // window.location="index.html"
  handleAddTask()
});

function handleAddTask() {
  const taskTitle = $('#TaskTitle').val();
  const dueDate = $('#datepicker').val();
  const description = $('#taskdescription').val();
  // const button = $('#add');

  const newTask = {
    id: crypto.randomUUID(),//  Here we use a tool called `crypto` to generate a random id for our project. 
    title: taskTitle,
    duedate: dueDate,
    taskdescription: description,
  };
  console.log(newTask)

  let mytasks = JSON.parse(localStorage.getItem("mytasks")) || []
  mytasks.push(newTask);
  localStorage.setItem("mytasks", JSON.stringify(mytasks));
  console.log(mytasks);

}


// Todo: create a function to create a task card
function createTaskCard(task) {

}
// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new t

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
}
// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker

// function readTasksFromStorage() {


