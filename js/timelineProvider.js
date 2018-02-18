var popupButton;
var popupPage;
var datetoChoose;
var dayinWeek;
var chatBox, chat;
var chatOut = false;
var message;
var sendClick = 0;
var storedMessages = ["......", "That sounds interesting!", "I guess...",
"I'll give it a try; any other suggestions?"];
var datetoChange;

document.addEventListener("DOMContentLoaded", function(){
    popupButton = document.getElementById("addTask");
    popupPage = document.getElementById("todoList");
    datetoChoose = document.getElementsByClassName("dates");
    dayinWeek = document.getElementsByClassName("dailyTasks");
    chatBox = document.getElementById("chatBox");
    chat = document.getElementById("chat");
    message = document.getElementById("message");
});

/*
 * Send new message to Agent; this contains the chatbox functionalities
 */
function newMessage(){
  message = document.getElementById("message");
  if(message.value != ''){
    chat.innerHTML = chat.innerHTML + '<div class="container sender">' +
    '<img src="./images/lovebots.jpg" alt="client avatar"/>' + "<p>" + message.value + "</p></div>";

    setTimeout(function() {
      chat.innerHTML = chat.innerHTML + '<div class="container">' +
      '<img src="./images/cat.jpg" alt="agent avatar"/>' + "<p>" + storedMessages[sendClick] +
      "</p></div>";

      sendClick = (sendClick+1)%(storedMessages.length);
    }, 888);

  }
  else{
    alert("Enter the message to be sent : |");
  }

  document.getElementById("message").value = "";
}

/*
 * Allows enter key for sending message
 */
document.getElementById("message").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("sendBttn").click();
    }
});

/*
 * Toogles the display of chatbox by changing the margin
 */
function chatToggle(){
  if(!chatOut){
    chatBox.style.margin = "0";
    var e = document.getElementById("openS");
    e.style.display = "none";
    var e = document.getElementById("closeS");
    e.style.display = "block";
  }
  else{
    chatBox.style.margin = "0 0 -420px 0";
    var e = document.getElementById("openS");
    e.style.display = "block";
    var e = document.getElementById("closeS");
    e.style.display = "none";
  }

  chatOut = !chatOut;
}

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

function submitNewTask(id){
  datetoChange.innerHTML=
}


function changeTasktoDate(id){
  datetoChange = document.getElementById(id);

}

function submitSchedule(id){
    alert("Notified target with updated schedule");
}
