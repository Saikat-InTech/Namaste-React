import {LOGO_URL} from "../util/constant"
const Heading=()=>{
    return(
        <div className="header">
            <div className="logo">
            <img 
  alt="Food Delivery Logo"
  src={LOGO_URL}
/>

            </div>
            <div className="nav-item">
                <ul className="nav-menu">
<li>HOME</li>
<li>About Us</li>
<li>Contact Us</li>
<li>Cart</li>

                </ul>
            </div>

        </div>
    )
}
export default Heading;