var body = document.getElementById("body");
var isactivated = false;
var wallpaperbutton = document.getElementById("wallpaperbutton");
var wallpaperdiv = document.getElementById("wallpaperdiv");
var labelerr = document.getElementById("label")

button1.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/defualt.jpg')";
    labelerr.src = '/wallpaperthumbnails/1wallpaper.png'
  
}
button2.onclick = function(){
  body.style.backgroundImage = "url('/wallpaperlist/wallpaper1.jpg')";
  labelerr.src = '/wallpaperthumbnails/2wallpaper.png'
}
button3.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper2.jpg')";
    labelerr.src = '/wallpaperthumbnails/3wallpaper.png'
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
