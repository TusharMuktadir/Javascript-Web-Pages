// array destructure


// let numbers =[10,20,30,40,50,60]
// console.log(numbers[0]);
// console.log(numbers[3]);


// let numbers =[10,20,30,40,50,60]
// let [num1,num2,num3,num4,num5,num6] = numbers
// console.log(num2);
// console.log(num5);


// swap variables

// let a=10, b=20;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);


// object destructure

// const studentInfo = {
//     Name:"Tushar",
//     Id:1106035,
//     gpa:3.00
// }
// console.log(studentInfo.Id);
// console.log(studentInfo.Name);
// console.log(studentInfo.gpa);



// const studentInfo = {
//     Name:"Tushar",
//     Id:1106035,
//     gpa:3.00
// }
// const{Id,Name} = studentInfo;
// console.log(Id);
// console.log(Name);


// destructuring function parameters

// const studentInfo = (student) =>{
//  console.log(`${student.Id},${student.Name}`)
// }
// const student ={
//     Name:"Tushar",
//     Id:1106035,
// }
// studentInfo(student);



const studentInfo = ({Name,Id}) =>{
    console.log(`${Id},${Name}`)
   }
   const student ={
       Name:"Tushar",
       Id:1106035,
   }
   studentInfo(student);
