var thedis = document.getElementById("gamedis");
var thedistext = document.getElementById("gamedisplaydivtext");
var iframecontent = document.getElementById("iframecont")
var clock = document.getElementById("clock")
var closebutton = document.getElementById("exit")

function handleGameButtonClick(button, description, src){
  button.onclick = function(){
    thedis.style.opacity = 1;
    thedistext.textContent = description;
    iframecontent.src = src;
    clock.style.opacity = 0;
  }
}

handleGameButtonClick(buttonminute, "this game is pretty good", "/gameslist/10minutestilldawn/index.html");
handleGameButtonClick(button2048, "2048", "/gameslist/2048/index.html");
handleGameButtonClick(buttonworld, "A Small World Cup", "/gameslist/asmallworldcup/index.html");
handleGameButtonClick(buttontanks, "Awsome Tanks 2", "/gameslist/awsometanks2/index.html");
handleGameButtonClick(buttonbros, "Basket Bros", "/gameslist/basketbros/index.html");
handleGameButtonClick(buttonbasket, "Basket Random", "/gameslist/basketrandom/index.html");
handleGameButtonClick(buttonboxing, "Boxing Random", "/gameslist/boxingrandom/index.html");
handleGameButtonClick(buttoncube, "Cube Field", "/gameslist/cubefield/index.html");
handleGameButtonClick(buttoncrossy, "Crossy Road", "/gameslist/crossyroads/index.html");
handleGameButtonClick(buttondraw, "Draw The Hill", "/gameslist/drawthehill/index.html");
handleGameButtonClick(buttondrift, "Drift Boss", "/gameslist/driftboss/index.html");
handleGameButtonClick(buttondrive, "Drive Mad", "/gameslist/drivemad/index.html");
handleGameButtonClick(buttonfluid, "Fluid Simulator", "/gameslist/fluidsim/index.html");
handleGameButtonClick(buttongun2, "Gun Mayhem 2", "/gameslist/gunmayhem2/index.html");
handleGameButtonClick(buttongunredux, "Gun Mayhem Redux", "/gameslist/gunmayhemredux/index.html");
handleGameButtonClick(buttonjoyride, "Jetpack Joyride", "/gameslist/jetpackjoyride/index.html");
handleGameButtonClick(buttonmonkey, "Monkey Mart", "/gameslist/monkeymart/index.html");
handleGameButtonClick(buttonparkour, "Noob Steve Parkour", "/gameslist/noobsteveparkour/index.html");
handleGameButtonClick(buttonpaper, "Paper.io", "/gameslist/paperio/index.html");
handleGameButtonClick(buttonpapery, "Papery Planes", "/gameslist/paperyplanes/index.html");
handleGameButtonClick(buttonradius, "Radius Raid", "/gameslist/radiusraid/index.html");
handleGameButtonClick(buttonsoccer, "Soccer Random", "/gameslist/soccerrandom/index.html");
handleGameButtonClick(buttonvex, "Vex 6", "/gameslist/vex6/index.html");
handleGameButtonClick(buttonsubway, "Subway Surfers", "/gameslist/subwaysurfers/index.html");
handleGameButtonClick(buttonvolley, "Volley Random", "/gameslist/volleyrandom/index.html");



closebutton.onclick = function(){
  thedis.style.opacity = 0;
  iframecontent.src = "";
  clock.style.opacity = 1;
}
