
var numOfWon = 0;
var numOfLost = 0;

for(i=1;i<=5;i++){
    var guessNumber = parseInt(prompt("Enter a Number from 1 to 5 :"));
var randomNumber = Math.floor(Math.random()*5) + 1;

if(guessNumber==randomNumber){
    console.log("You Have Won ");
    numOfWon++;
}
else{
    console.log("You Have Lost. Random number was " + randomNumber);
    numOfLost++;
}
}
document.write(" Total Number Of Won = "+ numOfWon + "<br>");
document.write(" Total Number Of Lost = "+ numOfLost + "<br>");