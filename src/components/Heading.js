import { LOGO_URL } from "../util/constant";
import { Link } from "react-router";
const Heading = () => {
  return (
    <div className="header">
      <div className="logo">
        <img alt="Food Delivery Logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul className="nav-menu">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Heading;
