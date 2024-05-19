var isactivated = false;
var gamediv =  document.getElementById("myDiv");

function sussy(){
  if(isactivated === false){
      isactivated = true;
      gamediv.style.transform = "translate(33%, 10%)"
      gamediv.style.pointerEvents = "all";
  }
  else if(isactivated === true){
      isactivated = false;
      gamediv.style.pointerEvents = "none";
      gamediv.style.transform = "translate(33%, 200%)"
  } 
}
