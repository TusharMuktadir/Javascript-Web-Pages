// x=30;
// if(true){
//     y=20;
//     console.log(`y= ${y}`);
//     var y;
// }
// console.log(`x= ${x}`);
// var x;

// "use strict"
// function message(){
//     console.log("welcome")
// }
// message();


// "use strict"
// function message(text="Hello This is default parameter"){
//     console.log(`${text}`);
// }
// message();
// message("I Love Js es6");

// "use strict"
// function sum(x,y,...z){
//     console.log(`x= ${x}, y= ${y}, z= ${z}`);
// }
// sum(10,20,30,40,50);

// function addNumbers(x,y,z){
//     return x +y + z;
// }
// let numbers=[2,4,6]
// console.log(addNumbers(...numbers));
// let numbers1 = [1,3,5,...numbers]
// console.log(numbers1);

// 

// function addNumbers(x,y,z){
//     return x +y + z;
// }
// let numbers1=[2,4,6]
// let numbers2 = [1,3,5]
// let numbers =[...numbers1, ...numbers2];
// console.log(numbers);


// let p1 ={
//     Name: 'Zakaria Muktadir Tushar',
//     Age: '22',
//     Nationanality:'Bangladeshi',
// }

// let p2 ={
//     Religion:  'Islam',
//     Occupation: 'Student'
// }
// let p ={...p1, ...p2}
// console.log(p)


// function studentInfo1(name, age){
//     return{
//         name: name,
//         age:age
//     }
// }
// console.log(studentInfo1("Zakaria Muktadir Tushar", 22));


// 

// function studentInfo1(name, age){
//     return{
//          name,
//           age
//     }
// }
// console.log(studentInfo1("Zakaria Muktadir Tushar", 22));


// let message ={
//     body(){
//         return 'Hi, I am object function'
//     }
// }
// console.log(message.body());

// let message ={
//     'body name'(){
//         return 'Hi, I am object function'
//     }
// }
// console.log(message['body name']());


// const names =["s1","s2","s3"]
// for(let name of names){
//     console.log(name)
// }


// let students ={
//     name: 'Zakaria Muktadir Tushar',
//     id: 1106035,
//     age:22
// }
// for(let x in students){
//     console.log(x)
// }



// let students ={
//     name: 'Zakaria Muktadir Tushar',
//     id: 1106035,
//     age:22
// }
// for(let x in students){
//     console.log(students[x])
// }

let students ={
    name: 'Zakaria Muktadir Tushar',
    id: 1106035,
    age:22
}
for(let x in students){
    console.log(`${x}: ${students[x]}`)
}