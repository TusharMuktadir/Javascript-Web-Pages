var base = prompt("Enter Base =");
var height = prompt("Enter Height =");

var area = base*height;
document.write("Area of rectangle = "+ area + "<br/>");

var farn = parseFloat(prompt("Enter Farenheit ="));

var celsius =(farn-32)*(5/9);
document.write("Celsius = " + celsius +"<br/>");

var celsius = parseFloat(prompt("Enter Celsius ="));
var farn = (celsius*9/5)+ 32;
document.write("Farenheit = "+ farn);

