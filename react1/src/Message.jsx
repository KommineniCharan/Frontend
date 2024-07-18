import { React, Component } from "react";
class Message extends Component {
  state = { msg: "Hello, Greetings" };

  gm = () => {
    this.setState({ msg: "Good Morning, How are you" });
  };

  ge = () => {
    this.setState({ msg: "Good Evening, Go to Sleep" });
  };

  render() {
    return (
      <>
        <h1>This is a Message Class Component</h1>
        <h2>State Message: {this.state.msg}</h2>
        <button className="btn btn-primary" onClick={this.gm}>
          Good Morning
        </button>
        <button className="btn btn-info" onClick={this.ge}>
          Good Evening
        </button>
      </>
    );
  }
}

export default Message;
