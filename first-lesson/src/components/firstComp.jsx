import React from "react";
let per = 0;
class NewComp extends React.Component {
  render() {
    return (
      <div>
        {console.log(per++)}
        <h1>{(this.props.item.name = "Sexy")}</h1>
        <h1>{(this.props.item.age = 21)}</h1>
        <h1>{(this.props.item.name1 = "I'm")}</h1>
        <h1>{(this.props.item.age1 = 23)}</h1>
        {console.log(this.props.item)}
      </div>
    );
    // return this.props.name;
    // <ul className="list">
    //   {this.name.map((val) => {
    //     return <li>{val}</li>;
    //   })}
    //   list global item
    // </ul>
  }
}

export default NewComp;
