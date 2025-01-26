import React, { useContext, useState, useEffect } from "react";
import "./Styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../MyContext";
import { Link } from "react-router-dom";
function Navbar() {
  const { Cart, setCart } = useContext(MyContext);
  const [Length, setLength] = useState(0);
  useEffect(() => {
    setLength(0);
    for (let i = 0; i < Cart.length; i++) {
      setLength((prev) => prev + Cart[i].quantity);
    }
  }, [Cart]);

  return (
    <>
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img src="https://ijaihari.github.io/projects/Amazon%20Clone/images/amazon-logo-white.png" />
          </div>
        </Link>
        <div className="searchbar">
          <input type="text" placeholder="Search Amazon.in" />
          <button>
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </button>
        </div>
        <Link to="/orders">
          <div className="returns">
            <p>
              Returns <br />
              <span> & Orders</span>
            </p>
          </div>
        </Link>
        <Link to="/Cart">
          <div className="cart">
            <img
              className="cart-icon"
              src="https://ijaihari.github.io/projects/Amazon%20Clone/images/icons/cart-icon.png"
              alt=""
            />
            <span>{Length < 10 && Length > 0 ? "0" + Length : Length}</span>
            <p>Cart</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
