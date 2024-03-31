var body = document.getElementById("body");
var isactivated = false;
var wallpaperbutton = document.getElementById("wallpaperbutton");
var wallpaperdiv = document.getElementById("wallpaperdiv");

button1.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/defualt.jpg')";
}
button2.onclick = function(){
  body.style.backgroundImage = "url('/wallpaperlist/wallpaper1.jpg')";
}
button3.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper2.jpg')";
  }
button4.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper3.jpg')";
}

function sus(){
    if(isactivated === false){
        isactivated = true;
        wallpaperdiv.style.opacity = 0.95;
        wallpaperdiv.style.pointerEvents = "all";
    }
    else if(isactivated === true){
        isactivated = false;
        wallpaperdiv.style.opacity = 0;
        wallpaperdiv.style.pointerEvents = "none";
    } 
}
