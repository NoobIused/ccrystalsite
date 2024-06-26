var frontpagediv =  document.getElementById("frontpagedivid");
var gamediv = document.getElementById("grid")
var backarrow = document.getElementById("backarrowid")
var isonsomethingelse = false


function sussy(){
  frontpagediv.style.transform = 'translateY(-100%)';
  gamediv.style.transform = 'translateY(-550px)';
  backarrow.style.opacity = 1;
}

backarrow.onclick = function(){
  if (backarrow.style.opacity == 1){
    gamediv.style.transform = 'translateY(500px)';
    frontpagediv.style.transform = 'translateY(10%)';
    backarrow.style.opacity = 0;
  }

}
