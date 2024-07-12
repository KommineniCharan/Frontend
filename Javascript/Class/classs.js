class Account {
  accId;
  accname;
  acc_bal;
  min_bal = 500;

  openAcc() {
    return "Account Opened Successfully";
  }

  deposit(amount) {
    console.log("Deposit Amount", amount);
    return (this.acc_bal = amount + this.min_bal);
  }

  getStmt() {
    console.log("Amount Available in the Account");
    return this.acc_bal;
  }

  withdraw(amount) {
    console.log("Withdraw Amount", amount);
    return this.acc_bal - amount;
  }
}

let a1 = new Account(101, "Test", 5000);

console.log(a1.openAcc());
console.log(a1.deposit(5000));
console.log(a1.getStmt());
console.log(a1.withdraw(2000));
