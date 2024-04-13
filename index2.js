var isactivated = false;
var gamediv =  document.getElementById("myDiv");

function sussy(){
  if(isactivated === false){
      isactivated = true;
      gamediv.style.opacity = 0.95;
      gamediv.style.pointerEvents = "all";
  }
  else if(isactivated === true){
      isactivated = false;
      gamediv.style.opacity = 0;
      gamediv.style.pointerEvents = "none";
  } 
}
