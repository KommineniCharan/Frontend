let createEmployee = (emp) => {
  return new Promise((resolve, reject) => {
    let flag = true;
    setTimeout(() => {
      employee.push(emp);
      flag
        ? resolve("Database Connection is Successful")
        : reject("Connection Error");
    }, 1000);
  });
};

let getEmployee = () => {
  let rows = "";
  setTimeout(() => {
    employee.forEach((emp) => {
      rows =
        rows +
        `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        </tr>`;
    });
    document.getElementById("tbody").innerHTML = rows;
  }, 2000);
};

createEmployee({ id: 101, name: "test", email: "test@gmail.com" })
  .then((msg) => {
    console.log(msg);
    getEmployee();
  })
  .catch((err) => {
    console.log(err);
  });
