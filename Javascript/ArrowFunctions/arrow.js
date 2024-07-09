function wish() {
  console.log("Good Morning");
}
wish();

let greet = () => {
  console.log("Hello How are You");
};

greet();

let add = (a, b = 60, c) => {
  return a + b + c;
};

let result = add(40, null, 40);
console.log(result);
