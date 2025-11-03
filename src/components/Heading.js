import useStatus from "../util/useStatus";

import { LOGO_URL } from "../util/constant";
import { Link } from "react-router";
const Heading = () => {
  const status = useStatus();
  return (
    <div className="flex justify-between items-center bg-gray-200">
      <div className="w-24 p-4">
        <img alt="Food Delivery Logo" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex p-6">
          <li className="p-4">User is: {status ? "online 🟢" : "ofline 🔴"}</li>
          <Link to="/">
            <li className="p-4">HOME</li>
          </Link>
          <Link to="/about">
            <li className="p-4">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="p-4">Contact Us</li>
          </Link>
          <Link to="cart">
            <li className="p-4">Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Heading;
