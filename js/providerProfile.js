var chatBox, chat;
var chatOut = false;
var message;
var sendClick = 0;
var storedMessages = ["......", "That sounds interesting!", "I guess...",
"I'll give it a try; any other suggestions?"];

/*
 * Register all the DOM elements into variable for
 * easier access later
 */
document.addEventListener("DOMContentLoaded", function(){
  popupButton = document.getElementById("addB");
  popupPage = document.getElementById("popupPage");
  closeL = document.getElementById("closeLabel");
  pendingTarget = document.getElementById("pendingTarget");
  target1 = document.getElementById("target1");
  target2 = document.getElementById("target2");
  targets = document.getElementsByClassName("targets");
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
