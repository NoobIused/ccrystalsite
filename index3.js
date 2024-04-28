var thedis = document.getElementById("gamedis");
var thedistext = document.getElementById("gamedisplaydivtext");
var iframecontent = document.getElementById("iframecont")
var clock = document.getElementById("clock")
var closebutton = document.getElementById("exit")

buttonminute.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "10 Minutes Till Dawn";
  iframecontent.src = "/gameslist/10minutestilldawn/index.html";
  clock.style.opacity = 0;
}

button2048.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "2048";
  iframecontent.src = "/gameslist/2048/index.html";
  clock.style.opacity = 0;
}

buttonworld.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "A Small World Cup";
  iframecontent.src = "/gameslist/asmallworldcup/index.html";
  clock.style.opacity = 0;
}

buttontanks.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Awsome Tanks 2";
  iframecontent.src = "/gameslist/awsometanks2/index.html";
  clock.style.opacity = 0;
}

buttonbros.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Basket Bros";
  iframecontent.src = "/gameslist/basketbros/index.html";
  clock.style.opacity = 0;
}

buttonbasket.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Basket Random";
  iframecontent.src = "/gameslist/basketrandom/index.html";
  clock.style.opacity = 0;
}

buttonboxing.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Boxing Random";
  iframecontent.src = "/gameslist/boxingrandom/index.html";
  clock.style.opacity = 0;
}

buttoncube.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Cube Field";
  iframecontent.src = "/gameslist/cubefield/index.html";
  clock.style.opacity = 0;
}

buttoncrossy.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Crossy Road";
  iframecontent.src = "/gameslist/crossyroads/index.html";
  clock.style.opacity = 0;
}

buttondraw.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Draw The Hill";
  iframecontent.src = "/gameslist/drawthehill/index.html";
  clock.style.opacity = 0;
}

buttondrift.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Drift Boss";
  iframecontent.src = "/gameslist/driftboss/index.html";
  clock.style.opacity = 0;
}

buttondrive.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Drive Mad";
  iframecontent.src = "/gameslist/drivemad/index.html";
  clock.style.opacity = 0;
}

buttonfluid.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Fluid Simulator";
  iframecontent.src = "/gameslist/fluidsim/index.html";
  clock.style.opacity = 0;
}

buttongun2.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Gun Mayhem 2";
  iframecontent.src = "/gameslist/gunmayhem2/index.html";
  clock.style.opacity = 0;
}

buttongunredux.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Gun Mayhem Redux";
  iframecontent.src = "/gameslist/gunmayhemredux/index.html";
  clock.style.opacity = 0;
}

buttonmonkey.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Monkey Mart";
  iframecontent.src = "/gameslist/monkeymart/index.html";
  clock.style.opacity = 0;
}

buttonparkour.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Noob Steve Parkour";
  iframecontent.src = "/gameslist/noobsteveparkour/index.html";
  clock.style.opacity = 0;
}

buttonpaper.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Paper.io";
  iframecontent.src = "/gameslist/paperio/index.html";
  clock.style.opacity = 0;
}

buttonpapery.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Papery Planes";
  iframecontent.src = "/gameslist/paperyplanes/index.html";
  clock.style.opacity = 0;
}

buttonradius.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Radius Raid";
  iframecontent.src = "/gameslist/radiusraid/index.html";
  clock.style.opacity = 0;
}

buttonsoccer.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Soccer Random";
  iframecontent.src = "/gameslist/soccerrandom/index.html";
  clock.style.opacity = 0;
}

buttonvex.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Vex 6";
  iframecontent.src = "/gameslist/vex6/index.html";
  clock.style.opacity = 0;
}

buttonsubway.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Subway Surfers";
  iframecontent.src = "/gameslist/subwaysurfers/index.html";
  clock.style.opacity = 0;
}

buttonvolley.onclick = function(){
  thedis.style.opacity = 1;
  thedistext.textContent = "Volley Random";
  iframecontent.src = "/gameslist/volleyrandom/index.html";
  clock.style.opacity = 0;
}


closebutton.onclick = function(){
  thedis.style.opacity = 0;
  iframecontent.src = "";
  clock.style.opacity = 1;
}
