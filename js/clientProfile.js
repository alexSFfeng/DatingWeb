var popupButton;
var popupPage;
var closeL;
var pendingTarget;
var target1;
var target2;
var targets;

document.addEventListener("DOMContentLoaded", function(){
    popupButton = document.getElementById("addB");
    popupPage = document.getElementById("popupPage");
    closeL = document.getElementById("closeLabel");
    pendingTarget = document.getElementById("pendingTarget");
    target1 = document.getElementById("target1");
    target2 = document.getElementById("target2");
    targets = document.getElementsByClassName("targets");
});

/*
window.document.onload = function(){
  popupButton = document.getElementById("addB");
  popupPage = document.getElementById("popupPage");
  console.log(popupPage);
  alert("bye");
}
*/

function popAddpage(id){
    popupPage.style.display = "inline-block";
}

function closePop(id){
    popupPage.style.display = "none";
}

function submitForm(id){
    popupPage.style.display = "none";
    pendingTarget.style.display = "inline-block";
}

function highLight(id){
    if(id === target1){
        target1.style.opacity = 1;
        target2.style.opacity = '';
    }else if(id === target2){
        target1.style.opacity = '';
        target2.style.opacity = 1;
    }
}

function hover(id){
    id.style.opacity = 1;
}

function fadeOut(id){
    id.style.opacity = 0.3;
}