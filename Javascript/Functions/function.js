function wish() {
  console.log("Good Morning");
}

wish();
wish();
wish();
wish();

function add() {
  console.log(10 + 20 + 30);
}

add();

function sum(a, b) {
  console.log(a + b);
}

sum(20, 30);

function sum1(a, b = 30) {
  console.log(a + b);
}
sum1(40);

function sum2(a, b) {
  console.log(a + b);
}
sum2(80);

function sum3(a, b = null) {
  console.log(a + b);
}
sum3(55);

function sum4(a, b = 15) {
  console.log(a + b);
}
sum4(15, 25);

function sum5(a, b, c) {
  console.log("Before Return Statement");
  return a + b + c;
  console.log("After Return Statement");
}
let result = sum5(30, 30, 30);
console.log(result);
