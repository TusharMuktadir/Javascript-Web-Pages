const taskOne = ()=>{
    return new Promise((resolve,reject)=>{
     resolve("task 1 is completed");
    });
};

const taskTwo = ()=>{
    return new Promise((resolve,reject)=>{
     resolve("task 2 is completed");
    });
};

const taskThree = ()=>{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve("task 3 is completed");
     },3000)
    });
};

const taskFour = ()=>{
    return new Promise((resolve,reject)=>{
     resolve("task 4 is completed");
    });
};



const callAllTasks = async ()=>{
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
}

callAllTasks();