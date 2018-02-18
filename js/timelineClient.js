var tasks;
var chatBox, chat;
var chatOut = false;
var message;
var sendClick = 0;
var storedMessages = ["Thinking...", "From my previous experiences..", "Analyzing results...",
"You are too needy; humans don't like what is easy to get..."];

document.addEventListener("DOMContentLoaded", function(){
    tasks = document.getElementsByClassName("task");
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
    '<img src="./images/cat.jpg" alt="client avatar"/>' + "<p>" + message.value + "</p></div>";

    setTimeout(function() {
      chat.innerHTML = chat.innerHTML + '<div class="container">' +
      '<img src="./images/lovebots.jpg" alt="agent avatar"/>' + "<p>" + storedMessages[sendClick] +
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

function checkoffTask(id){
    id.style.textDecoration = "line-through";
}
