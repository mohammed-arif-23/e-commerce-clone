import React from "react";
import "./Alerts.css";
const OrderAlert = ({ showPopup, setShowPopup, message }) => {
  return (
    <>
      {showPopup && (
        <div className="order-popup">
          <div className="order-popup-content">
            <p>{message}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderAlert;
