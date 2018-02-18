var tasks;

document.addEventListener("DOMContentLoaded", function(){
    tasks = document.getElementsByClassName("task");

});

function checkoffTask(id){
    id.style.textDecoration = "line-through";
}