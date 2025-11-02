import { useState, useEffect } from "react";
import { URL_GIT } from "../util/constant";
const User = (props) => {
  const { name, location } = props;
  const [count, setCount] = useState(0);
  let inc = () => {
    setCount(count + 1);
  };
  const data = async () => {
    const data = await fetch(URL_GIT);
    const json = await data.json();
    // console.log("hello");
    console.log(json);
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div className="fun-user-card">
      <h1>this is function compomnent</h1>
      <h4>Count:{count}</h4>
      <button onClick={inc}>click+1</button>
      <h2>Name:{name}</h2>
      <h3>locations:{location}</h3>
      <h4>date:27.10.2025</h4>
      <h1>hhffdfytfjjhhh</h1>
    </div>
  );
};
export default User;
