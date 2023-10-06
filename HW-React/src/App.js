import React from 'react';
import { connect } from 'react-redux';
import Computer from './ComputerList';

const App = ({ computers }) => {
  return (
    <div>
      <h1>Computer Network Monitor</h1>
      {computers.map((computer) => (
        <Computer key={computer.id} computer={computer} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  computers: state.computers,
});

export default connect(mapStateToProps)(App);
