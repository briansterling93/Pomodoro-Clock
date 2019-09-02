import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleBreakAdd = this.handleBreakAdd.bind(this);
    this.handleBreakMinus = this.handleBreakMinus.bind(this);
    this.handleSessionAdd = this.handleSessionAdd.bind(this);
    this.handleSessionMinus = this.handleSessionMinus.bind(this);
    this.state = {
      bLength: 5,
      sLength: 25,
      timer: 25,
      session: "Session"
    };
  }

  handleBreakAdd() {
    if (this.state.bLength === 60) {
      this.setState({ bLength: 60 });
    } else
      this.setState(prevState => {
        return { bLength: prevState.bLength + 1 };
      });
  }

  handleBreakMinus() {
    if (this.state.bLength === 1) {
      this.setState({ bLength: 1 });
    } else
      this.setState(prevState => {
        return { bLength: prevState.bLength - 1 };
      });
  }

  handleSessionAdd() {
    if (this.state.sLength === 60) {
      this.setState({ sLength: 60 });
    } else
      this.setState(prevState => {
        return { sLength: prevState.sLength + 1 };
      });
  }

  handleSessionMinus() {
    if (this.state.sLength === 1) {
      this.setState({ sLength: 1 });
    } else
      this.setState(prevState => {
        return { sLength: prevState.sLength - 1 };
      });
  }

  render() {
    return (
      <div>
        <div id="title">
          <h1>Pomodoro Clock</h1>
        </div>
        <div id="lengthDiv">
          <div id="breakLength">
            <h3>Break Length</h3>
            <div id="breakBtnsDiv">
              <input
                type="button"
                id="increment"
                value="+"
                onClick={this.handleBreakAdd}
              />
              <span id="span1">{this.state.bLength}</span>
              <input
                type="button"
                id="decrement"
                value="-"
                onClick={this.handleBreakMinus}
              />
            </div>
          </div>
          <div id="sessionLength">
            <h3>Session Length</h3>
            <div id="lengthBtnsDiv">
              <input
                type="button"
                id="increment"
                value="+"
                onClick={this.handleSessionAdd}
              />
              <span id="span2">{this.state.sLength}</span>
              <input
                type="button"
                id="decrement"
                value="-"
                onClick={this.handleSessionMinus}
              />
            </div>
          </div>
        </div>
        <div id="clockDiv">
          <div id="clock">
            <h1 id="clockTitle">{this.state.session}</h1>
            <p id="clockTime">{this.state.timer} : 00</p>
            <div id="clockBtns">
              <button id="startBtn">Start</button>
              <button id="resetBtn">Reset</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
