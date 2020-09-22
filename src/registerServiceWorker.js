import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CompactPicker } from "react-color";
import "./styles.css";
import { uniq, concat } from "lodash";
class App extends Component {
  state={
    color: 'Yellow'
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


const SetOne = [
  "#122882",
  "#333EFF",
  "#00A5FF",
  "#CCEDFF",
  "#FFA333",
  "#5A2DB0",
  "#874ABF",
  "#B45AFF",
  "#D29CFF",
  "#F0DEFF"
];

const SetTwo = [
  "#122882",
  "#333EFF",
  "#00A5FF",
  "#66C9FF",
  "#CCEDFF",
  "#5A2DB0",
  "#8744BF",
  "#B45AFF",
  "#D29CFF",
  "#F0DEFF"
];

const SetThree = [
  "#4E356A",
  "#866BA4",
  "#C3B5D1",
  "#E1DAEB",
  "#B363A7",
  "#D1A1CA",
  "#F0E0ED",
  "#009908",
  "#66C2E8",
  "#CCEBF7"
];

const SetFour = [
  "#3E9090",
  "#8BBCBC",
  "#095948",
  "#12B291",
  "#33FFAE",
  "#ADFFDF",
  "#591D1D",
  "#C34040",
  "#FF664D",
  "#175572"
];

const SetFive = [
  "#333EFF",
  "#00A5FF",
  "#B45AFF",
  "#FFDC66",
  "#B251AE",
  "#66C9FF",
  "#FFBBD8",
  "#CCEDFF",
  "#5A2D80",
  "#FFA333"
];

const colors = uniq(concat(SetOne, SetTwo, SetThree, SetFour, SetFive));

  return (
    <div
    style={stylesObj}

    className="App">
  <input type = "text"
  onChange={this.onchangeHandler}
  value={this.state.color}
  ></input>
      <h1>React color picker demo</h1>
      <hr />
      <h4>Compact Picker</h4>
      <CompactPicker colors={colors} />
    </div>
  );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
