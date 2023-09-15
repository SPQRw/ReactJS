import React from "react";
class TestComp extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.updateParentData.num}</h1>
      </div>
    );
  }
}
export default TestComp;
