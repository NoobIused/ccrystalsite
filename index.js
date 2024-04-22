var body = document.getElementById("body");
var isactivated = false;
var wallpaperbutton = document.getElementById("wallpaperbutton");
var wallpaperdiv = document.getElementById("wallpaperdiv");
var ccurent = document.getElementById("current")

buttondefualt.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/defualt.jpg')";
    ccurent.textContent = 'Current Wallpaper: Defualt'
}
button1.onclick = function(){
  body.style.backgroundImage = "url('/wallpaperlist/wallpaper1.jpg')";
  ccurent.textContent = 'Current Wallpaper: Wallpaper #1'
}
button2.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper2.jpg')";
    ccurent.textContent = 'Current Wallpaper: Wallpaper #2'
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
