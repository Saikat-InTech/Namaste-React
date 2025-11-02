import User from "./User";
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "dummy name",
      bio: "dummy bio",
    };
    console.log("parent constructor is called");
  }
  async componentDidMount() {
    // console.log("parent mounted is call");
    const URL = "https://api.github.com/users/saikat-intech";
    const data = await fetch(URL);
    const json = await data.json();
    this.setState({
      name: json.name,
      bio: json.bio,
    });
    // console.log(data, json);
  }
  render() {
    const { name, bio } = this.state;
    console.log("parent render is called");
    return (
      <div>
        <h1>its about page</h1>
        <h2>i learn how to work path</h2>
        <h4>
          {bio}
          <br />
          Name:-{name}
        </h4>
        {/* <User name={"saikat fun"} location={"kolkata"} /> */}
        <UserClass name={"frist class"} location={"kolkata"} />
        <UserClass name={"second class"} location={"kolkata"} />
        <User />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>its about page</h1>
//       <h2>i learn how to work path</h2>

//       <User name={"saikat fun"} location={"kolkata"} />
//       <UserClass name={"saikat class"} location={"kolkata"} />
//       <h1> </h1>
//     </div>
//   );
// };
export default About;
