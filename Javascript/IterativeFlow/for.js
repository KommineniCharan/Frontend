for (var i = 1; i <= 10; i++) {
  console.log(i);
}

for (var i = 1; i <= 10; i = i + 1) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (var i = 1; i <= 20; i = i + 1) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

for (var i = 1; i <= 10; i++) {
  //console.log("Print 18 Table", i * 18);
  console.log(`18 * ${i} = ${i * 18}`);
}
