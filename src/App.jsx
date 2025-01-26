import { useState, useEffect, useContext } from "react";
import Handler from "./Components/Handler";
import "./App.css";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { MyContext, orderContext } from "./MyContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartHandle from "./Components/CartHandle";
import Orders from "./Components/Orders";
function App() {
  const [Condition, setCondition] = useState(false);
  const [Array, setArray] = useState([]);
  const [Cart, setCart] = useState([]);
  const [Order, setOrder] = useState([]);
  let fetchData = async () => {
    let x = ["electronics", "jewelery", "men's clothing", "women's clothing"];
    setTimeout(() => {
      fetch(
        "https://fakestoreapi.com/products/category/" +
          x[Math.floor(Math.random() * 4)]
      )
        .then((res) => res.json())
        .then((data) => setArray([...Array, ...data]));
    }, 500);
    setTimeout(() => {
      Array.length > 0 ? setCondition(true) : setCondition(false);
    }, 2500);
  };
  let fetchMethod = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setArray([...Array, ...data]));
    setTimeout(() => {
      Array.length > 0 ? setCondition(true) : setCondition(false);
    }, 2500);
  };
  useEffect(() => {
    fetchMethod();
  }, []);

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={{ Cart, setCart }}>
          <orderContext.Provider value={{ Order, setOrder }}>
            <Navbar />
            <Routes>
              <Route
                path="/Cart"
                element={<CartHandle key={Math.random(100000) * 999} />}
              />
              <Route path="/orders" element={<Orders />}></Route>
              <Route
                path="/"
                element={
                  <>
                    <div className="ContainerBox">
                      <div className="main">
                        <InfiniteScroll
                          dataLength={Array.length}
                          next={fetchData}
                          hasMore={true}
                          style={{
                            overflow: "hidden",
                            zIndex: "-1",
                            width: "100%",
                          }}
                          loader={
                            Condition ? (
                              <div className="loader">
                                <Loader />
                              </div>
                            ) : (
                              <div></div>
                            )
                          }
                        >
                          <Handler data={Object.assign([], Array)} />
                        </InfiniteScroll>
                      </div>
                    </div>
                  </>
                }
              />
            </Routes>
          </orderContext.Provider>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
