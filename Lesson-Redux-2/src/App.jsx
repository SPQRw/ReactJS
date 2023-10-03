import React from "react";
import { connect } from "react-redux";

function App({ count, increment, decrement }) {
  return (
    <>
      <span>hh</span>
    </>
  );
}

const mapStateToProps = () => {};

const mapDispatcheToProps = {};

export default connect(mapStateToProps, mapDispatcheToProps)(App);
