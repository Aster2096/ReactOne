
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends Component {
  state={
    color: 'Yellow',
  }

  onchangeHandler = e =>{
    this.setState({
      color: e.target.value
    })
  }

  render(){
    const stylesObj = {
      background: this.state.color
    }
    return(
      <div
      style={stylesObj}

      className="App">
    <input type = "text" onChange={this.onchangeHandler} value={this.state.color}></input>
    <br></br>
    <p> "COLOR IS A POWER WHICH DIRECTLY INFLUENCES THE SOUL."</p>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
