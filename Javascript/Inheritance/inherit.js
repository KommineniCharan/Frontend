class Account {
  id;
  name;
  acc_bal;
  min_bal = 500;

  constructor(id, name) {
    this.id = id;
    this.name = name;
    console.log("Parent Class Constructor");
  }
}

class Savings extends Account {
  constructor(id, name, acc_bal) {
    // this.id = id;
    // this.name = name;
    super(id, name);
    this.acc_bal = acc_bal;
    console.log("Child Class Constructor");
  }
}

class Current extends Account {
  constructor() {
    super();
    console.log("Current Class Constructor");
  }
}

let a1 = new Savings(101, "Mahesh", 9999999999);
console.log(a1);

let c1 = new Current();
console.log(c1);
