// function display1(){
//     console.log("I am Tushar");
// }

// const display2=()=>{
//     console.log("I am Pritee");
// }
// display1();
// display2();


// function display1(){console.log("I am Tushar");}

// const display2=()=> console.log("I am Pritee");
// display1();
// display2();


// function message1(){
//     return "Hi I am Tushar";
// }
// const message2=()=>{
//     return "Hi I am Pritee";
// }
// console.log(message1());
// console.log(message2());


// function message1(){
//     return "Hi I am Tushar";
// }
// const message2=()=> "Hi I am Pritee";
// console.log(message1());
// console.log(message2());


// function add1(num1, num2){
//     return num1+num2;
// }
// const add2=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(add1(20,30));
// console.log(add2(20,50));

var students = [
    {
        name:'Zakaria Muktadir',
        id:1106035,
        gpa: 3.50
    },

    {
        name:'Umma Hani',
        id:1106056,
        gpa: 3.80
    },

    {
        name:'Muktadir',
        id:1106050,
        gpa: 2.67
    },
    {
        name:'pritee',
        id:1106050,
        gpa: 3.67
    },

    function studentNames1(){
        return students.filter(function(x){
            return x.gpa > 3
        }).map(function(y){
            return y.name;
        });
    }

]

function studentNames1(){
    return students.filter(function(x){
        return x.gpa > 3
    }).map(function(y){
        return y.name;
    });
}

const studentNames2=()=>{
    return students.filter((x)=> x.gpa>3).map((y)=> y.name);
       
}

console.log(studentNames1());
console.log(studentNames2());