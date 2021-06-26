var nam1, nam2, nam3;
nam1= "n";
nam2= "m";
nam3= "o";
console.log(nam3);

var names = new Array(6);
names[0] = "T";
names[1] = "U";
names[2] = "S";
names[3] = "H";
names[4] = "A";
names[5] = "R";
console.log(names[5]);
console.log(names[7]);


var names = ["T","U","S","H","A","R"]
console.log(names.length);
names.push("P");
names.push("R");
names.push("I");
names.push("T");
console.log(names.length);

names.pop()
console.log(names.length);
names.pop()
console.log(names.length);

var country1=["Bangladesh","India"];
var country2=["Nepal","Bhutan"];
var country = country1.concat(country2);
console.log(country);


var num = [10,20,30,40,50];
for( var i=0;i<5;i++){
    console.log(num[i]);
}

var sum=0;
var num = [10,20,30,40,50];
for( var i=0;i<5;i++){
    
    console.log(num[i]);
    sum=sum+num[i];
}
console.log("Sum = "+sum);



var num = new Array();

for( var i=0;i<5;i++){
    num[i]=parseInt(prompt("Enter a Number:"));
} 
var sum=0;
for( var i=0;i<5;i++){
    console.log(num[i]);
    sum=sum+num[i];

} 
   
console.log("Sum = "+sum);

var names=["T","U","S","H","A","R"];
console.log(names)
names.shift();
console.log(names)
names.unshift("v");
console.log(names)


console.log("Sum = "+sum);

var names=["T","U","S","H","A","R"];
names.splice(3,2,"P","R");
console.log(names)


var names=["T","U","S","H","A","R"];
var sortedNames = names.sort();
console.log(sortedNames)


var names=["T","U","S","H","A","R"];
var sortedNames = names.sort();
names.reverse();
console.log(sortedNames)



var numbers = [20,4,3,5,27,39,2,6,1];
numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers)


