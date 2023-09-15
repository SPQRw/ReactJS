import logo from "./logo.svg";
import "./App.css";
import CallbackComp from "./components/CallbackComp";
import React from "react";
import TestComp from "./components/TestComp";
// import NewComp from "./components/NewComp";

// const Arr = ["Tim", ",", "Mark", ",", "Lol"];
// function App() {
//   return <NewComp arr={Arr} />;
// }
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  updateData = (value) => {
    this.setState({
      num: value,
    });
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log(this.state.num);
          }}
        >
          Click
        </button>
        <CallbackComp updateData={this.updateData} num={this.state.num} />
        <TestComp updateParentData={this.state} />
      </div>
    );
  }
}

export default App;
