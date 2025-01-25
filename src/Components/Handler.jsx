import Main from "./Main";
import { MyContext } from "../MyContext";
import { useContext } from "react";
function Handler(props) {
  const { Cart, setCart } = useContext(MyContext);
  return (
    <>
      <MyContext.Provider value={{ Cart, setCart }}>
        {props.data.map((a) => {
          return <Main data={a} key={a.id + Math.random(100)} />;
        })}
      </MyContext.Provider>
    </>
  );
}
export default Handler;
