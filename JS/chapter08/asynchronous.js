function fastFunction(){
    console.log("Fast function completed");
}
function slowFunction(){
    var now = new Date().getTime();
    while(new Date().getTime() < now + 5000){/* processing */}
console.log("Slow function completed");
}
function asyncslowFunction(){
    console.log("asyncslowFunction was called");
    setTimeout(slowFunction, 5000);
}

fastFunction();
slowFunction();
fastFunction();
slowFunction();
/* ******* */
fastFunction();
asyncslowFunction();
fastFunction();
asyncslowFunction();