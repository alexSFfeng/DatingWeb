/* Login popup modal box reaction */
var popupLogin;

// read the element on load
window.onload = function(){
  popupLogin = document.getElementById("modal");
}

// display the pop up login modal box
function displayModal(){
  popupLogin.style.display="block";
}

// close the pop up login modal box
function closeModal(){
  popupLogin.style.display="none";
}

function redirect(type){
  if(type === 'subject'){
    window.location.href = "file:///Users/Xelafe/Documents/Winter18/CSE134B/DatingWeb/ClientProfile.html";
  }
}

function loginUser(){
  var type = document.getElementById("logOptions");
  var typeStr = type.options[type.selectedIndex].text;
  if(typeStr === "Agent"){
    window.location.href = "file:///Users/Xelafe/Documents/Winter18/CSE134B/DatingWeb/ProviderTargets.html";
  }
  else{
    window.location.href = "file:///Users/Xelafe/Documents/Winter18/CSE134B/DatingWeb/ClientProfile.html";

  }
}
