$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

function handleProjectFormSubmit(event) {
  event.preventDefault();

  // ? Read user input from the form
  const TaskTitle = TaskTitleInputEl.val().trim();
  const DueDate = DueDateInputEl.val();// yyyy-mm-dd format
  const Description = DescriptionInputEl.val();   



//rieve tasks and nextId from localStorage
let duedate = document. getElementBytd('DueDate');
let title = document.getElementBytd('taskTitle');
let description = document.getElenentByfd('Description');

// Todo: create a function to generate a unique task id
function generateTaskId() {
  const newTask = {
    // ? Here we use a tool called `crypto` to generate a random id for our project. This is a unique identifier that we can use to find the project in the array. `crypto` is a built-in module that we can use in the browser and Nodejs.
    id: crypto.randomUUID(),
    name: Title,
    type: Description,
    dueDate: Date,
  };
}
const TaskId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

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
      if (now.isSameorbefore(taskDueDate, 'day')) {
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
}
// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    const nextId = $(this).attr('data-project-id');
    const taskss = readProjectsFromStorage();
  
    // ? Remove project from the array. There is a method called `filter()` for this that is better suited which we will go over in a later activity. For now, we will use a `forEach()` loop to remove the project.
    projects.forEach((project) => {
      if (project.id === projectId) {
        projects.splice(projects.indexOf(project), 1);
      }
    });
  
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
}
// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
$("add-task").button().on("click", function() {
  $('#formModal').hide();
});

$("taskForm").on("submit", handleAddTask)

});

