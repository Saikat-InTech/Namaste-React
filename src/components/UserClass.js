import React from "react";

class UserClass extends React.Component {
  name = "saikat";
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="class-card">
        <h1>this is class compomnent</h1>
        <h2>{this.props.name}</h2>
        <h3>locations:kolkata</h3>
        <h4>date:27.10.2025</h4>
    <h3>hjdv</h3>
      </div>
    );
  }
}

export default UserClass;
