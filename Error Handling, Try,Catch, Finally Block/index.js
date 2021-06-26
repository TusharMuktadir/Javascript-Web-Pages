try{
    alert("Hello Tushar");
    alert(x);
    
}
catch(err){
console.log(err);
console.log(err.name);
console.log(err.message);
}
finally{
    alert("Whats up Tushar");
}

document.querySelector("#checkButton").addEventListener("click", function(){
    
  var num = document.querySelector("#numTextField").value;
  try{
    if(num<5){
        throw "input is too low";
    }
    else if(num>10){
    throw "input is too high";

    }
  }
  catch(err){
      console.log(err);
  }
});