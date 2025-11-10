import { MENU_URl } from "../util/constant";
import { useEffect } from "react";

const Menucard = () => {
  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const menuItem = await fetch(MENU_URl);
    // console.log(menuItem);
    const json = await menuItem.json();
    // console.log(json);
  };

  return (
    <div>
      <h1>name</h1>
      <h3>avg rat</h3>
      <ul>
        <li>briyani</li>
      </ul>
    </div>
  );
};
export default Menucard;
