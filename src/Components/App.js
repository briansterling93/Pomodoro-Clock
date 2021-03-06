import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.resetClock = this.resetClock.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.startClock = this.startClock.bind(this);
    this.breakClock = this.breakClock.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.state = {
      bLength: 5,
      sLength: 25,
      session: "Session",
      minutes: 25,
      seconds: "00"
    };
  }

  incrementSession() {
    this.setState(prevState => {
      return { sLength: prevState.sLength + 1 };
    });

    this.setState(prevState => {
      return { minutes: prevState.sLength };
    });

    this.setState({
      seconds: `00`
    });
  }

  decrementSession() {
    this.setState(prevState => {
      return { sLength: prevState.sLength - 1 };
    });

    this.setState(prevState => {
      return { minutes: prevState.sLength };
    });

    if (this.state.sLength === 1) {
      this.setState(prevState => {
        return { sLength: prevState.sLength + 1 };
      });

      this.setState(prevState => {
        return { minutes: prevState.sLength };
      });
    }

    this.setState({
      seconds: `00`
    });
  }

  startClock() {
    this.setState({
      minutes: this.state.sLength,
      session: "Session",
      seconds: 59
    });

    this.setState(prevState => {
      return { minutes: prevState.minutes - 1 };
    });

    this.timer = setInterval(() => {
      this.setState(prevState => {
        return { seconds: prevState.seconds - 1 };
      });

      if (this.state.seconds === -1) {
        this.setState({
          seconds: 59
        });

        this.setState(prevState => {
          return { minutes: prevState.minutes - 1 };
        });
      } else {
        if (this.state.minutes === 0 && this.state.seconds === 0) {
          this.setState({
            minutes: "0",
            seconds: "00",
            session: "Session Complete!"
          });
          clearInterval(this.timer);
        }
      }
    }, 1000);
  }

  resetClock() {
    clearInterval(this.timer);
    clearInterval(this.breakTimer);
    this.setState({
      minutes: 25,
      seconds: `00`,
      sLength: 25,
      session: "Session"
    });
  }

  breakClock() {
    this.setState({
      session: "Break",
      minutes: this.state.bLength,
      seconds: 59
    });

    this.setState(prevState => {
      return { minutes: prevState.minutes - 1 };
    });

    this.breakTimer = setInterval(() => {
      this.setState(prevState => {
        return { seconds: prevState.seconds - 1 };
      });

      if (this.state.seconds === -1) {
        this.setState(prevState => {
          return {
            seconds: 59,
            minutes: prevState.minutes - 1
          };
        });
      }

      if (this.state.seconds === 0 && this.state.minutes === 0) {
        this.setState({
          minutes: `0`,
          seconds: `00`,
          session: "Break Complete!"
        });
        clearInterval(this.breakTimer);
      }
    }, 1000);
  }

  incrementBreak() {
    this.setState({
      session: "Break"
    });

    this.setState(prevState => {
      return { bLength: prevState.bLength + 1 };
    });

    this.setState(prevState => {
      return { minutes: prevState.bLength };
    });
  }

  decrementBreak() {
    this.setState({
      session: "Break"
    });

    this.setState(prevState => {
      return { bLength: prevState.bLength - 1 };
    });

    this.setState(prevState => {
      return { minutes: prevState.bLength };
    });

    if (this.state.bLength === 1) {
      this.setState({
        bLength: 1
      });

      this.setState(prevState => {
        return { minutes: prevState.bLength };
      });
    }
  }

  render() {
    return (
      <div>
        <div id="title">
          <h1>Pomodoro Clock</h1>
        </div>
        <div id="lengthDiv">
          <div id="breakLength">
            <h3>
              Break <span id="mq-title">Length</span>
            </h3>

            <div id="breakBtnsDiv">
              <input
                className="btn"
                type="button"
                id="increment"
                value="+"
                onClick={this.incrementBreak}
              />
              <span id="span1">{this.state.bLength}</span>
              <input
                className="btn"
                type="button"
                id="decrement"
                value="-"
                onClick={this.decrementBreak}
              />
            </div>
          </div>
          <div id="sessionLength">
            <h3>
              Session <span id="mq-title">Length</span>
            </h3>
            <div id="lengthBtnsDiv">
              <input
                className="btn"
                type="button"
                id="increment"
                value="+"
                onClick={this.incrementSession}
              />
              <span id="span2">{this.state.sLength}</span>
              <input
                className="btn"
                type="button"
                id="decrement"
                value="-"
                onClick={this.decrementSession}
              />
            </div>
          </div>
        </div>
        <div id="clockDiv">
          <div id="clock">
            <h1 id="clockTitle">{this.state.session}</h1>
            <p id="clockTime">
              {this.state.minutes} : {this.state.seconds}{" "}
            </p>
            <div id="clockBtns">
              <button id="startBtn" className="btn" onClick={this.startClock}>
                Start Session
              </button>
              <button id="resetBtn" className="btn" onClick={this.resetClock}>
                Reset
              </button>
              <button
                id="startBrkBtn"
                className="btn"
                onClick={this.breakClock}
              >
                Start Break
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
