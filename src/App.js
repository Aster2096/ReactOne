// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { CompactPicker } from "react-color";
import "./styles.css";
import { uniq, concat } from "lodash";

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

export default function App() {
  return (
    <div className="App">
      <h1>React color picker demo</h1>
      <hr />
      <h4>Compact Picker</h4>
      <CompactPicker colors={colors} />
    </div>
  );
}
