import React, { useContext, useState } from "react";
import { MyContext, orderContext } from "../MyContext";
import "./Styles/Cart.css";
import OrderAlert from "./Styles/Alerts/OrderAlert";
import { NavLink } from "react-router-dom";
function CartHandle() {
  const { Cart, setCart } = useContext(MyContext);
  const totalPrice = () => {
    let total = 0;
    for (let i = 0; i < Cart.length; i++) {
      total += Cart[i].total + 79.0 + 19.0;
    }
    let tax = parseInt(((total * 0.18) / 100).toFixed(2));
    let value = total + tax;
    return [total.toFixed(2), value.toFixed(2), tax.toFixed(2)];
  };
  const [showpopup, setShowPopup] = useState(false);
  const { Order, setOrder } = useContext(orderContext);
  return (
    <>
      {showpopup && (
        <OrderAlert
          setShowPopup={setShowPopup}
          showPopup={showpopup}
          message={"Order Placed Successfully"}
        />
      )}
      <div className="cartpage">
        {Cart.length <= 0 ? (
          <>
            <div className="cart-header">Your Cart is Empty</div>
          </>
        ) : (
          <>
            <div className="m-cart">
              <div className="my-cart">
                {Cart.map((a) => {
                  return (
                    <>
                      <div className="my-cart-info ">
                        <div className="flex-row">
                          <div className="my-cart-img">
                            <img src={a.image} />
                          </div>
                          <div className="flex-column">
                            <div className="my-cart-title">{a.title}</div>
                            <div className="my-cart-price">₹ {a.price}</div>
                            <div className="my-cart-quantity">
                              Quantity : {a.quantity}
                            </div>
                          </div>
                          <button
                            className="remove"
                            onClick={() =>
                              setCart(Cart.filter((item) => item.id !== a.id))
                            }
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="cart-breakdown">
                <table className="">
                  <tbody>
                    <tr>
                      <td className="m-header">Order Summary :</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="m-price">Cart Value :</td>
                      <td className="m-amount">₹{totalPrice()[0]}</td>
                    </tr>
                    <tr>
                      <td className="m-price">Delivery Charges :</td>
                      <td className="m-amount">₹79.00</td>
                    </tr>
                    <tr>
                      <td className="m-price">Tax :</td>
                      <td className="m-amount">₹{totalPrice()[2]}</td>
                    </tr>
                    <tr>
                      <td className="m-price">Packing & Other Charges :</td>
                      <td className="m-amount">₹19.00</td>
                    </tr>
                    <tr className="m-total">
                      <td className="m-price final ">Total Price :</td>
                      <td className="m-amount final">₹{totalPrice()[1]}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex-row">
                  <button
                    className="place-order"
                    onClick={() => {
                      window.alert("Order Placed Successfully");
                      setShowPopup(true);
                      setOrder(Object.assign([], Cart));
                    }}
                  >
                    Place Order
                  </button>

                  {window.innerWidth > 768 ? (
                    <NavLink to="/" className="place-order  link">
                      Shop More
                    </NavLink>
                  ) : (
                    <NavLink to="/orders" className="place-order  link">
                      View Orders
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartHandle;
