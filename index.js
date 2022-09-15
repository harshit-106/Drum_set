
for(var i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
  makesound(this.innerHTML);
  buttonAnimation(this.innerHTML);
});

}

  document.addEventListener("keydown", function(e){
    makesound(e.key);
    buttonAnimation(e.key);
  });
  function makesound(key){
    switch (key) {
      case "w":
        var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
       audio= new Audio("sounds/tom-2.mp3");
      audio.play();
        break;
      case "s":
       audio= new Audio("sounds/tom-3.mp3");
      audio.play();
        break;
      case "d":
       audio= new Audio("sounds/tom-4.mp3");
      audio.play();
        break;
      case "j":
         audio= new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "k":
           audio= new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "l":
           audio= new Audio("sounds/snare.mp3");
          audio.play();
          break;
    }  }
function buttonAnimation(x){
  document.querySelector("."+x).classList.add("pressed");
  setTimeout (function(){
      document.querySelector("."+x).classList.remove("pressed");
  },100);
}
