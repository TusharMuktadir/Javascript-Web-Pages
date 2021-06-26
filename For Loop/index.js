
for(var x=1; x<=100;x=x+1){
    document.write("" + x  );
}
document.write("<h1>End </h1>");

for(var x=2; x<=100;x=x+2){
    document.write("" + x);
}
document.write("<h1>End </h1>");

for(var x=1; x<=99;x=x+2){
    document.write("" + x);
}
document.write("<h1>End </h1>");

for(var x=10; x>=1;x=x-1){
    document.write("" + x);
}
document.write("<h1>End </h1>");

var sum=0;
for(var x=1; x<=10;x=x+1){
    sum=sum+x;
}
document.write("Sum = " + sum + "<br>");

var sum=0;
for(var x=5; x<=10;x=x+1){
    sum=sum+x;
}
document.write("Sum = " + sum +"<br>");


var m=parseInt(prompt("Enter The starting Number:"));
var n=parseFloat(prompt("Enter the Last Number:"));
var sum=0;
for(x=m;x<=n;x=x+1){
    sum=sum+x;
}
document.write("Sum = "+ sum+"<br>");

var num1=parseInt(prompt("Enter The First Number: "));
var num2=parseInt(prompt("Enter The Second Number: "));
var sum= num1+num2;
document.write("Result = "+ sum);
