import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/actions";

function App({ count, increment, decrement }) {
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatcheToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatcheToProps)(App);
