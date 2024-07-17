import React from "react";
import { Component } from "react";
import { Fragment } from "react";

class Destructure extends Component {
  message = "Hello";
  address = "Hebbal";
  emp = { id: 101, name: "test", sal: 45000 };

  render() {
    return (
      <>
        <h1>This is from Destructure Class Component</h1>
        <h2>Wish: {this.message}</h2>
        <h3>Address: {this.address}</h3>
        <h4>Employee ID: {this.emp.id}</h4>
        <h3>Employee Name : {this.emp.name}</h3>
        <h3>Employee Salary : {this.emp.sal}</h3>
      </>
    );
  }
}

export default Destructure;
