import React, { useState, useEffect } from "react";
import "./Alerts.css";
import OrderAlert from "./OrderAlert";
function BuyNowAlert({ showPopup, setShowPopup, message }) {
  const [popup, setpopup] = useState(false);
  useEffect(() => {
    console.log(popup);
  }, [popup]);

  return (
    <>
      {showPopup && (
        <div className="order-popup">
          <div className="order-popup-content">
            <p>Confirm Your Order</p>
            <div className="o-card">
              <img src={message.image} alt="" />
              <div className="o-info">
                <p>{message.title}</p>
                <p>To Pay : ₹ {(message.price * 86.55).toFixed(2)}</p>
              </div>
            </div>
            <div
              className="flex-row"
              style={{ justifyContent: "space-between", gap: "25px" }}
            >
              <button onClick={() => setShowPopup(false)}>Close</button>
              <button
                onClick={() => {
                  setpopup(true);
                }}
              >
                Confirm
              </button>
            </div>
            {popup && (
              <div className="order-popup-msg">Order Placed Successfully</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default BuyNowAlert;
