import React, { Component } from 'react'
import './App.css';
// import Message from './components/Message';

export class App extends Component {

  constructor(props) {
    super(props)
    console.log(this)
    this.state = {
      count: 0,
      toggle: false,
    }
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  sub = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  reset = () => {
    this.setState({
      count: 0,
    })
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="App"
        style={{
          height: "100px",
          backgroundColor: this.state.toggle ? "blue" : "red",
        }}>
        {/* < Message name={"Nate"} message={"is walking"} 
        num={3} /> */}
        <h1>Help us Count</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.reset}>Reset</button>
        <br></br>
        <button onClick={this.toggle}>Toggle: {String(this.state.toggle)}</button>
      </div>
    )
  }
}

export default App

