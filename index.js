var body = document.getElementById("body");
var isactivated = false;
var wallpaperbutton = document.getElementById("wallpaperbutton");
var wallpaperdiv = document.getElementById("wallpaperdiv");
var ccurent = document.getElementById("current")

buttondefualt.onclick = function(){
    body.style.backgroundColor = "rgb(33, 33, 33)";
    ccurent.textContent = 'Current Theme: Defualt'
}
button1.onclick = function(){
  body.style.backgroundColor = "rgb(0, 29, 70)";
  ccurent.textContent = 'Current Theme: Theme 1'
}
button2.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper2.jpg')";
    ccurent.textContent = '?'
  }
button3.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper3.jpg')";
    ccurent.textContent = '?'
  }
button4.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper4.jpg')";
    ccurent.textContent = '?'
  }
  button5.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper5.jpg')";
    ccurent.textContent = '?'
  }
  button6.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper6.jpg')";
    ccurent.textContent = '?'
  }
  button7.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper7.jpg')";
    ccurent.textContent = '?'
  }
  button8.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper8.jpg')";
    ccurent.textContent = '?'
  } 
  button9.onclick = function(){
    body.style.backgroundImage = "url('/wallpaperlist/wallpaper9.jpg')";
    ccurent.textContent = '?'
  }
function sus(){
    if(isactivated === false){
        isactivated = true;
        wallpaperdiv.style.transform = "translate(20%, 10%)"
        wallpaperdiv.style.pointerEvents = "all";
    }
    else if(isactivated === true){
        isactivated = false;
        wallpaperdiv.style.transform = "translate(20%, 200%)"
        wallpaperdiv.style.pointerEvents = "none";
    } 
}
