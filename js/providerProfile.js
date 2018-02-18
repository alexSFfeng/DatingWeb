var targets;

document.addEventListener("DOMContentLoaded", function(){
    targets = document.getElementsByClassName("dealingTargets");

});

function selectTarget(id){
    id.style.opacity = 1;

    for(var i = 0; i < targets.length; i++){
        if(id != targets[i]){
            targets[i].style.opacity = "";
        }
    }
}