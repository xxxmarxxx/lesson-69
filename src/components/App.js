import React, { Component } from "react";
import Timer from "./Timer";
import "./App.css";
import SwitchButton from "./SwitchButton";

class App extends Component {
  state = {
    time: 0,
    active: false,
  };

  handleClick = () => {
    console.log("klick");
    if (this.state.active) {
      clearInterval(this.idInterval);
    } else {
      this.idInterval = setInterval(() => this.addSecond(), 1000);
    }

    this.setState({
      active: !this.state.active,
    });
  };

  addSecond = () => {
    this.setState({
      time: this.state.time + 1,
    });
  };

  render() {
    return (
      <>
        <h3>Stopwatch</h3>
        <p className="timer">{this.state.time}</p>
        <SwitchButton
          click={this.handleClick}
          active={this.state.active}
        />{" "}
        <br />
        <Timer />
      </>
    );
  }
}

export default App;
