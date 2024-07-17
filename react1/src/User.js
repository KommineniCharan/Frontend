import { React, Component } from "react";
import Employee from "./Employee";

class User extends Component {
  message = "Good Morning";
  emp = { id: 102, name: "uma", email: "uma@gmail.com" };

  render() {
    return (
      <>
        <h2>This is User Class Component</h2>
        <h3>Message: {this.message}</h3>
        <Employee user={this.emp} message={this.message} />
      </>
    );
  }
}

export default User;
