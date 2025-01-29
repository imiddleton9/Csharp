async function myDisplay(){
    let myPromise = new Promise(function(myResolve, myReject){
        myResolve("This is the end of the assignment!");
    });
    console.log(await myPromise);
}
myDisplay();