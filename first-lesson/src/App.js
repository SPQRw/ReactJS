import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NewComp from "./components/firstComp";

// const myName = "Andrew";
// const cl = "App";
// const firstTime = true;
// // const element = <h1 className="el">First element</h1>;
// const element2 = React.createElement("h2", { className: cl }, "Second element");
const arr = [
  {
    name: "",
    age: 0,
  },
  // {
  //   name1: "",
  //   age1: 0,
  // },
];
function App() {
  return arr.map((val) => {
    return <NewComp item={val}></NewComp>;
  });
  // const arr = [
  //   {
  //     name:
  //   }
  // ]
  // return(

  // )
  // if (firstTime)
  //   return (
  //     <div className={cl}>
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         {element2}
  //         <p>Hello , {myName}</p>
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
  // else return <p>No</p>;
}

export default App;
