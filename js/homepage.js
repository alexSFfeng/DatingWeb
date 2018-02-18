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
  event.target.preventDefault();                          
  if(type == 'subject'){
    window.location.href("../ClientProfile.html");
  }
  else{
    window.location.href("../ProviderTargets.html");
  }
}

function loginUser(){
  var type = document.getElementById("loginOptions");
  var typeStr = type.options[type.selectedIndex].text;

  if(typeStr == "Agent"){
    window.location.href("../ProviderTargets.html");
  }
  else{
    window.location.href("../ClientProfile.html");

  }
}
