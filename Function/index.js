function square(num){
    var result = num * num;
    document.write("Result = "+ result + "<br>");

}
square(9);
square(8);


function square(num1,num2){
    var result = num1 * num2;
    document.write("Result = "+ result + "<br>");

}
square(9,6);
square(8,8);


function square(num1,num2){
    var result = num1 * num2;
    return result;

}
document.write(square(9,9)+ "<br>");


function addition(num1,num2){
    var result = num1 + num2;
    document.write("Sum = "+ result + "<br>" )
}
addition(5,7);
addition(8,6);

function subtraction(num1,num2){
    var result = num1 - num2;
    document.write("Sub = "+ result + "<br>" )
}
subtraction(20,10);
subtraction(45,10);

