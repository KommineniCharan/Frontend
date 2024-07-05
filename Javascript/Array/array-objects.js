var sizes = [30, 32, 34, 36, 38];

let emp = { id: 101, name: "Besant", loc: "Hebbal" };
console.log(sizes.length - 1);

for (var i = 0; i <= sizes.length - 1; i++) {
  console.log("Using For Loop", sizes[i]);
}

for (size of sizes) {
  console.log("Using For Of", size);
}

for (e in emp) {
  console.log(emp[e]);
}

console.log("Employee Id :", emp.id);
console.log("Employee Name: ", emp.name);
console.log("Employee Location: ", emp.loc);

emp.email = "besant@gmail.com";
emp.course = "HTML";
console.log(emp);

delete emp.email;
console.log(emp);

console.log(sizes);
sizes.push(40);
console.log(sizes);

sizes.pop();
console.log(sizes);

sizes.unshift(28);
console.log(sizes);

sizes.shift();
console.log(sizes);

let incl = sizes.includes(38);
console.log(incl);

let incl1 = sizes.includes(40);
console.log(incl1);

let ind = sizes.indexOf(36);
console.log(ind);

sizes.splice(1, 2, 42);
console.log(sizes);
