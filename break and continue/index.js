for(var i=1;i<=100;i++){
    if(i==20){
        break;
    }
document.write(" "+i );
}
document.write("End"+ "<br>");


for(var i=1;i<=100;i++){
document.write(" "+i );

    if(i==20){
        break;
    }
}
document.write("End"+ "<br>");


for(var i=1;i<=100;i++){
    if(i==20){
        continue;
    }
document.write(" "+i );
}
document.write("End"+ "<br>");


for(var i=1;i<=100;i++){
    
document.write(" "+i );

if(i==20){
    continue;
}
}
document.write("End"+ "<br>");


for(var i=1;i<=100;i++){
    if(i%2==0){
        continue;
    }
document.write(" "+i );
}
document.write("End"+ "<br>");

for(var i=1;i<=100;i++){
    if(i%2!==0){
        continue;
    }
document.write(" "+i );
}
document.write("End"+ "<br>");
