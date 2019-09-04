import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.startClock = this.startClock.bind(this);
    this.state = {
      bLength: 5,
      sLength: 25,
      session: "Session",
      minutes: 25,
      seconds: 0
    };
  }

incrementSession() {
  this.setState(prevState => {
   return { sLength: prevState.sLength + 1 }
  })

  this.setState(prevState => {
    return { minutes: prevState.sLength }
  })

  this.setState({
    seconds: `00`
  })
}

decrementSession() {
  this.setState(prevState => {
    return { sLength: prevState.sLength - 1 }
  })

  this.setState(prevState => {
    return { minutes: prevState.sLength }
  })

  if(this.state.sLength === 1) {
    this.setState(prevState => {
      return { sLength: prevState.sLength + 1 }
    })

    this.setState(prevState => {
      return { minutes: prevState.sLength}
    })
  }

  this.setState({
    seconds: `00`
  })
}

startClock() {
  setInterval(() => {
    this.setState({
      seconds: 59
    })

    this.setState(prevState => {
      return { minutes: prevState.sLength - 1 }
    })
  }, 1000)
}

// startClock() {
//   this.setState({
//     seconds: 59
//   })

//   const y = this.setState(prevState => {
//     return { minutes: prevState.sLength - 1 }
//   })
// }



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
                className='btn'
                type="button"
                id="increment"
                value="+"
              />
              <span id="span1">{this.state.bLength}</span>
              <input
                className='btn'
                type="button"
                id="decrement"
                value="-"
              />
            </div>
          </div>
          <div id="sessionLength">
            <h3>Session Length</h3>
            <div id="lengthBtnsDiv">
              <input
              className='btn'
                type="button"
                id="increment"
                value="+"
                onClick={this.incrementSession}
              />
              <span id="span2">{this.state.sLength}</span>
              <input
              className='btn'
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
            <p id="clockTime">{this.state.minutes} : {this.state.seconds} </p>
            <div id="clockBtns">
              <button id="startBtn" className='btn' onClick={this.startClock}>Start</button>
              <button id="resetBtn" className='btn' >Reset</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
