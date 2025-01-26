import React, { useEffect } from "react";
import { useContext } from "react";
import { orderContext } from "../MyContext";
import "./Styles/Orders.css";
const Orders = () => {
  const { Order } = useContext(orderContext);
  useEffect(() => {
    console.log(Order);
  }, [Order]);
  return (
    <>
      <div className="orders">
        <h1>Manage Orders</h1>
        {Order.length > 0 ? (
          <>
            {Order.map((item) => (
              <div className="order-card">
                <div className="o-img">
                  {" "}
                  <img src={item.image} alt="" />
                </div>
                <div className="order-card-info">
                  <p>{item.title}</p>
                  <p>Quantity : {item.quantity}</p>
                  <div className="shipment-card">
                    Status :{" "}
                    {item.id * 30 > 100 ? "Out for Delivery" : "Shipped"}
                    <div className="progress-bar">
                      <div
                        className="progress-bar-filled"
                        style={{
                          width: `${item.id * 30 > 100 ? 100 : item.id * 30}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <h1>No Orders</h1>
        )}
      </div>
    </>
  );
};

export default Orders;
