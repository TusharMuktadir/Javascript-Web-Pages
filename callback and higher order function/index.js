// function square(x){
//     console.log(`square of ${x} = ${x*x}`);
// }

// square(4);


// function square(x){
//     console.log(`square of ${x} = ${x*x}`);
// }

// const y=square;
// y(5);


// function square(x){
//     console.log(`square of ${x} = ${x*x}`);
// }

// function higherOrderFunction(num,callback){
//   callback(num);
// }
// higherOrderFunction(6,square);


const taskOne = (callback)=>{
    console.log("Task1");
    callback();
}

const taskTwo = (callback)=>{
    setTimeout(()=>{
        console.log("Task2");
        callback();
    },3000);
    
    
}

const taskThree = (callback)=>{
    console.log("Task3");
    callback();
}

const taskFour = (callback)=>{
    console.log("Task4");
    callback();
}

const taskFive = ()=>{
    console.log("Task5");
}

taskOne(function f1(){
    taskTwo(function f2(){
        taskThree(function f3(){
            taskFour(function f4(){
             taskFive();
            });
        });
    });
});



// const taskOne = (callback)=>{
//     console.log("Task1");
//     callback();
// }

// const taskTwo = (callback)=>{
//     setTimeout(()=>{
//         console.log("Task2");
//         callback();
//     },3000);
    
    
// }

// const taskThree = (callback)=>{
//     console.log("Task3");
//     callback();
// }

// const taskFour = (callback)=>{
//     console.log("Task4");
//     callback();
// }

// const taskFive = ()=>{
//     console.log("Task5");
// }

// taskOne(()=>{
//     taskTwo(()=>{
//         taskThree(()=>{
//             taskFour(()=>{
//              taskFive();
//             });
//         });
//     });
// });

