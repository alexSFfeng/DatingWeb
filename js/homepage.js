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
