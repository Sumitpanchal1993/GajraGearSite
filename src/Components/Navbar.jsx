import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Media_File/GGlogo.png";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <div className="navlogo">
          <img src={Logo} />
          <div>
            <h3>GAJRA GROUP OF INDUSTRIES</h3>
            <h6>Leader of Gear Manufacturer In India</h6>
          </div>
        </div>
      </Link>
      <div className="navlinks">
        <ul>
          <li>
            <div class="dropdown">
              <div class="dropbtn">
                <Link to="/">Gajra Group</Link>
              </div>
              <div class="dropdown-content">
                <Link to="/elve">Elve Corporation</Link>
                <Link to="/ggpl">Gajra Gears</Link>
                <Link to="/gdgl">Gajra Differential</Link>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <div class="dropbtn">
                <Link to="/product">Product</Link>
              </div>
              <div class="dropdown-content">
                <Link to="/transmission">Transmission Gear</Link>
                <Link to="/differential">Differential Gear</Link>
                <Link to="/replacement">Replacement Parts</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/customer">Customers</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
