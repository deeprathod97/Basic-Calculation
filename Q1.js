let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);


a = a + b;
b = a - b;
a = a - b;

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);
