import logo from "./logo.svg";
import "./App.css";
import React from "react";
import TableList from "./components/TableList";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      stores: [
        {
          name: "",
          OpenTimeStore: 0,
          CloseTimeStore: 0,
          IsItSpecial: true,
          DistanceFromCenter: 0,
        },
        {
          name: "",
          OpenTimeStore: 0,
          CloseTimeStore: 0,
          IsItSpecial: true,
          DistanceFromCenter: 0,
        },
        {
          name: "",
          OpenTimeStore: 0,
          CloseTimeStore: 0,
          IsItSpecial: true,
          DistanceFromCenter: 0,
        },
      ],
    };
  }
  render() {
    return this.state.stores.map((val) => {
      return <TableList ViewStores={val}></TableList>;
    });
  }
}

export default App;
