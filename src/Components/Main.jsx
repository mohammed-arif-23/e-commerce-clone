import React, { useContext, useState } from "react";
import "./Styles/Main.css";
import { MyContext } from "../MyContext";
import BuyNowAlert from "./Styles/Alerts/BuyNowAlert";
function Main(props) {
  const [showpopup, setShowPopup] = useState(false);
  const { Cart, setCart } = useContext(MyContext);
  const handleClick = (e) => {
    setCart((prev) => [
      ...prev,
      {
        ...props.data,
        price: (props.data.price * 86.55).toFixed(2),
        quantity: parseInt(e.target.parentNode.firstChild.value),
        total:
          parseInt(e.target.parentNode.firstChild.value) *
          (props.data.price * 86.55).toFixed(2),
      },
    ]);
  };
  return (
    <>
      {showpopup && (
        <BuyNowAlert
          setShowPopup={setShowPopup}
          showPopup={showpopup}
          message={props.data}
        />
      )}
      <div className="m-container">
        <div className="productCard">
          <img src={props.data.image} alt="" />
          <div className="productInfo">
            <p className="productName">{props.data.title.slice(0, 44)}</p>
            <p className="description">
              {props.data.title.length < 35
                ? props.data.description.slice(0, 135)
                : props.data.description.slice(0, 150)}
            </p>
            <div className="m-footer">
              <p className="productPrice">
                ₹ {(props.data.price * 86.55).toFixed(2)}
              </p>
              <p className="productRating">
                Rating : {props.data.rating.rate} ({props.data.rating.count})
              </p>
            </div>
            <div className="m-buttons">
              <select name="list" id="list">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button type="button" onClick={handleClick}>
                Add to Cart
              </button>
              <button type="button" onClick={() => setShowPopup(true)}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
