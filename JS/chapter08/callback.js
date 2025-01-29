function resultFormat1(result){
    console.log("The result is: " + result);
}
function resultFormat2(result){
    console.log("The result of your calculation is: " + result);
}
function sum(a,b, theFunction){
    let c = a + b;
    theFunction(c);
}
sum(2,2, resultFormat1);
sum(3,3, resultFormat2)