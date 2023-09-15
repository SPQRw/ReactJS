import React from "react";
class CallbackComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num,
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ num: ++this.state.num });
            console.log("num", this.state.num);
            this.props.updateData(this.state.num);
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}
export default CallbackComp;
