import React, { useState, useEffect, useContext } from "react";
import "./Alerts.css";
function BuyNowAlert({ showPopup, setShowPopup, message, Order }) {
  const [popup, setpopup] = useState(false);
  useEffect(() => {
    console.log(Order);
  }, [Order]);
  function capitalizeFirstLetter(string) {
    if (!string) return string; // Check for empty string
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      {showPopup && (
        <div className="order-popup">
          <div className="order-popup-content">
            <p>Product Details</p>
            <div className="o-card">
              <img src={message.image} alt="" />
              <div className="o-info">
                <p>{message.title}</p>
                <p>Price : ₹ {(message.price * 86.55).toFixed(2)}</p>
                <p className="light">Description : {message.description}</p>
                <p className="light">
                  Category : {capitalizeFirstLetter(message.category)}
                </p>
              </div>
            </div>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default BuyNowAlert;
