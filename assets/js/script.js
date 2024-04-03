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
    status: 'to-do',
  };
  console.log(newTask)

  let mytasks = JSON.parse(localStorage.getItem("mytasks")) || []
  mytasks.push(newTask);
  localStorage.setItem("mytasks", JSON.stringify(mytasks));
  console.log(mytasks);
}

// Todo: create a function to create a task card

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
let tasklist = localStorage.getItem(mytasks);
let toDo =document.getAttr('#to-do')
let inProg=document.getAttr('#in-progress')
let done=doctument.getAttr('#done')
let taskcard;

  for (let i=0;tasklist.length;i++) {
    if(tasklist[i].status === "done"){
      taskcard=createTaskCard(tasklist[i])
      done.append(taskcard)
    } else if (tasklist[i].status === "in-progress") {
      taskcard=createTaskCard(tasklist[i])
      inProg.append(taskcard)
    } else {
      taskcard=createTaskCard(tasklist[i])
      toDo.append(taskcard)
    }
  }

}


function createTaskCard(task) {
  const taskCard = $('<div>')
    .addClass('card project-card draggable my-3')
    .attr('data-project-id', task.id);
  const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.taskdescription);
  const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-project-id', project.id);
  cardDeleteBtn.on('click', handleDeleteProject);

  // ? Sets the card background color based on due date. Only apply the styles if the dueDate exists and the status is not done.
  if (projec.dueDate && project.status !== 'done') {
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
  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  // ? Return the card so it can be appended to the correct lane.
  return taskCard;}

// Todo: create a function to handle adding a new t

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
}
// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker

// function readTasksFromStorage() {


