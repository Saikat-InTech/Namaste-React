import React from "react";

class UserClass extends React.Component {
  // name = "saikat";
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(" chilld constructor is called");
  }
  componentDidMount() {
    console.log("child mounted is called");
  }

  render() {
    console.log("child render is called ");
    const { count, count2 } = this.state;
    return (
      <div className="class-card">
        <h1>this is class compomnent</h1>
        <h2>{this.props.name}</h2>
        <h2>
          Count:{count} and Count2: {count2}
        </h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}>
          click+1
        </button>
        <h3>locations:kolkata</h3>
        <h4>date:27.10.2025</h4>
        <h3>hh hjdv</h3>
      </div>
    );
  }
}

export default UserClass;
