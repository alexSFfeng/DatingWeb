var popupButton;
var popupPage;
var datetoChoose;
var dayinWeek;
document.addEventListener("DOMContentLoaded", function(){
    popupButton = document.getElementById("addTask");
    popupPage = document.getElementById("todoList");
    datetoChoose = document.getElementsByClassName("dates");
    dayinWeek = document.getElementsByClassName("dailyTasks");
});

function popAddpage(id){
    popupPage.style.display = "inline-block";
}

function closePop(id){
    popupPage.style.display = "none";
    for(var i = 0; i < datetoChoose.length; i++){
        datetoChoose[i].style.background = "";
    }
}

function chooseDate(id){
    id.style.background = "silver";
    for(var i = 0; i < datetoChoose.length; i++){
        if(id != datetoChoose[i]){
            datetoChoose[i].style.background = "";
        }
    }
}

function addTasktoDate(id){
    var li = document.createElement("li");
    var inputValue = document.getElementById("providerInput").value;
    if( inputValue === "" ){
        alert("you need to enter a task for the target to complete");
    }else{

    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    var whichDay = 200;
    for(var i = 0; i < datetoChoose.length; i++){
        if(datetoChoose[i].style.backgroundColor === "silver"){
            whichDay = i;
        }
    }

    if(whichDay === 200){
        alert("Select a day");
    }

    document.getElementById("providerInput").value = "";
    dayinWeek[whichDay].appendChild(li);

    /*
    for(var i = 0; i < dayinWeek.length; i++){
        dayinWeek[i].style = "";
    }
*/
    closePop();
}
}

function submitSchedule(id){
    alert("Notified target with updated schedule");
}