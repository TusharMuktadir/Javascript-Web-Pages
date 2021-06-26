var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function(){

   myVar.classList.add("my-style");
});

myVar.addEventListener("mouseout", function(){
    
   myVar.classList.remove("my-style");
});

for(var i=0;i<3;i++){
   document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
    
      var text = this.innerHTML;
      document.querySelector("h2").innerHTML=text + " is clicked";
   
   });
   
}
