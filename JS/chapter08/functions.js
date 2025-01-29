console.log('Isiah Middleton');
console.log(' ');
console.log('This is 2.1');
function product(p1, p2){
    return p1 * p2;
}
console.log(product(7,7));
let x = product(3,3);
console.log(x);

console.log(' ');
console.log('This is 2.2');
var sum = function(s1,s2){
    return(s1+s2);
}
console.log(sum(5,6));
var sum2 = function s(s1, s2){
    return(s1+s2);
}
console.log(sum2(6,7));

console.log(' ');
console.log('This is 2.3');
var divide = new Function('x', 'y', 'return x/y');
console.log(divide(24,3));

console.log(' ');
console.log('This is 2.4');
const diameter = radius => radius *2;
const perimeter = radius => 2 * Math.PI * radius;
const area = radius => radius ** 2 * Math.PI;
console.log('the diameter of the circle with the radius of 6 is ' + diameter(6)+'. The perimeter is ' + perimeter(6) + '. The area is ' + area(6));