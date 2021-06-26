var count = 0;
document.querySelector("textarea").addEventListener("keypress" , function(event){
    count++;
    var text=  event.key;
    document.querySelector("p").innerHTML = "You Have Pressed "+count;
});