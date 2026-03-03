// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../redux/myValues/myValueSlice";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";

export const Layout = () => {
  // const dispatch = useDispatch();
  // const value = useSelector((state) => state.myValue);

  return (
    <div>
      <AppBar />

      <Outlet />
      {/* {value}
      <button onClick={() => dispatch(increment(100))}>Increment</button>
      <button onClick={() => dispatch(decrement(50))}>Decrement</button> */}
    </div>
  );
};
