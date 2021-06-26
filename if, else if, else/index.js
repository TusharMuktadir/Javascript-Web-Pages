var num = 6;
        if(num%2==0)
        console.log("Even");

        else
        console.log("Odd");

var num = prompt("Enter a Number :");

if(num>0)
console.log("Positive");

else if(num<0)
console.log("Negative");

else
console.log("Zero");



 //letter grade
 //user marks input
 //A+ (80-100)
 //A (70-79)
 //A- (60-69)
 //B (50-59)
 //c (40-49)
 //d (33-39)
 //Fail


 var marks = prompt("Enter Your marks:");

 if(marks>100 || marks<0)
 console.log("Invalid Marks");

 else if(marks>=80 && marks<=100)
 console.log("A+");

 else if(marks>=70 && marks<=79)
 console.log("A");

 else if(marks>=60 && marks<=69)
 console.log("A-");

else if(marks>=50 && marks<=59)
 console.log("B");

 else if(marks>=40 && marks<=49)
 console.log("C");

 else if(marks>=33 && marks<=39)
 console.log("D");

 else
 console.log("F");

var num1 =prompt("Enter num1: ");
var num2 =prompt("Enter num2: ");
var num3 =prompt("Enter num3: ");


if(num1>num2 && num1>num3)
console.log("Large Number is = " + num1);

else if(num2>num1 && num2>num3)
console.log("Large Number is =" + num2);

else
console.log("Large Number is =" + num3);


var letter= prompt("Enter a Letter:");
letter = letter.toLowerCase();

if(letter=="a"|| letter=="e"|| letter=="i"|| letter=="o"|| letter=="u")
console.log("Letter is Vowel");

else
console.log("Letter is Consonent");

