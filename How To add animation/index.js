
for(var i=0;i<26;i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
    var text = this.innerHTML;
    console.log(text);

  audioPlay(text);
   playAnimation(text); 
    

    });

}


function audioPlay(text){
    switch (text) {
        case "a":
            var audio = new Audio("sounds/a.mp3");
            audio.play();
            break;
    
    case "b":
            var audio = new Audio("sounds/b.mp3");
            audio.play();
            break;
    
    case "c":
            var audio = new Audio("sounds/c.mp3");
            audio.play();
            break;

    case "d":
            var audio = new Audio("sounds/d.mp3");
            audio.play();
            break;

            case "e":
            var audio = new Audio("sounds/e.mp3");
            audio.play();
            break;

            case "f":
            var audio = new Audio("sounds/f.mp3");
            audio.play();
            break;

            case "g":
            var audio = new Audio("sounds/g.mp3");
            audio.play();
            break;

            case "h":
            var audio = new Audio("sounds/h.mp3");
            audio.play();
            break;

            case "i":
            var audio = new Audio("sounds/i.mp3");
            audio.play();
            break;

            case "j":
            var audio = new Audio("sounds/j.mp3");
            audio.play();
            break;

            case "k":
            var audio = new Audio("sounds/k.mp3");
            audio.play();
            break;

            case "l":
            var audio = new Audio("sounds/l.mp3");
            audio.play();
            break;

            case "m":
            var audio = new Audio("sounds/m.mp3");
            audio.play();
            break;

            case "n":
            var audio = new Audio("sounds/n.mp3");
            audio.play();
            break;

            case "o":
            var audio = new Audio("sounds/o.mp3");
            audio.play();
            break;

            case "p":
            var audio = new Audio("sounds/p.mp3");
            audio.play();
            break;

            case "q":
            var audio = new Audio("sounds/q.mp3");
            audio.play();
            break;

            case "r":
            var audio = new Audio("sounds/r.mp3");
            audio.play();
            break;

            case "s":
            var audio = new Audio("sounds/s.mp3");
            audio.play();
            break;

            case "t":
            var audio = new Audio("sounds/t.mp3");
            audio.play();
            break;

            case "u":
            var audio = new Audio("sounds/u.mp3");
            audio.play();
            break;

            case "v":
            var audio = new Audio("sounds/v.mp3");
            audio.play();
            break;

            case "w":
            var audio = new Audio("sounds/w.mp3");
            audio.play();
            break;

            case "x":
            var audio = new Audio("sounds/x.mp3");
            audio.play();
            break;

            case "y":
            var audio = new Audio("sounds/y.mp3");
            audio.play();
            break;

            case "z":
            var audio = new Audio("sounds/z.mp3");
            audio.play();
            break;


    
    
    }
}

document.addEventListener("keypress" , function(event){
 
    var text= event.key;
    audioPlay(text);
    playAnimation(text);

});

function playAnimation(text){

   var selectedButton = document.querySelector("." + text);
   selectedButton.classList.add("anim");

   setTimeout(function(){
       selectedButton.classList.remove("anim");
   },1000);
}
