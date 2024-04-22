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
button3.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper3.jpg')";
    ccurent.textContent = 'Current Wallpaper: Wallpaper #3'
  }
button4.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper4.jpg')";
    ccurent.textContent = 'Current Wallpaper: Wallpaper #4'
  }
  button5.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper5.jpg')";
    ccurent.textContent = 'Current Wallpaper: Wallpaper #5'
  }
  button6.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper6.jpg')";
    ccurent.textContent = 'Current Wallpaper: Wallpaper #6'
  }
  button7.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper7.jpg')";
    ccurent.textContent = 'Current Wallpaper: Wallpaper #7'
  }
  button8.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper8.jpg')";
    ccurent.textContent = 'Current Wallpaper: Wallpaper #8'
  } 
  button9.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper9.jpg')";
    ccurent.textContent = 'Current Wallpaper: Wallpaper #9'
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
