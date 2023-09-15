import React from "react";
let index = 0;
class NewComp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.state.names}</h1>
        {/* <p>{this.props.arr}</p> */}
        {/* <p>{this.props.age}</p> */}
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      //   names: this.props.arr,
      //   timer: setInterval(() => {
      //     this.setState({ names: ["Alex", ",", "Bob", ",", "Clark"] });
      //   }, 1000),
      timer: setInterval(() => {
        this.setState({ names: this.props.arr[0] });
      }, 1000),
    });
  }
  componentWillUnmount() {
    // clearInterval(this.state.timer);
  }
}
// NewComp.defaultProps = { name: "Yerkebulan", age: 10 };
export default NewComp;
