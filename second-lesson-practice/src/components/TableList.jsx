import React from "react";

class TableList extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       stores: this.props.ViewStores.stores,
  //     };
  //   }
  render() {
    return (
      <div>
        <h1>{this.props.ViewStores.stores}</h1>;
      </div>
    );
  }
}
export default TableList;
