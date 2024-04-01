$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));




// $(function(){
//       $('#myForm').on('submit', function(e){
//         e.preventDefault();
//         $.post('http://www.somewhere.com/path/to/post', 
//            $('#myForm').serialize(), 
//            function(data, status, xhr){
//              // do something here with response;
//            });
//       });
//   });

