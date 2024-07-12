class Account {
  id;
  name;
  amount;

  constructor(id, name, amount) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    console.log("This is my Constructor Method");
  }

  get_bal() {
    console.log("This is my get balance method");
  }

  open() {
    console.log("Open Method");
  }
}

let a1 = new Account(101, "Uma", 10000000);
a1.get_bal();
console.log(a1);
