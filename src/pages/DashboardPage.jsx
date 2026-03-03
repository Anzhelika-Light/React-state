import { useSelector, useDispatch } from "react-redux";
import { useLogOutRedirect } from "../hooks/useLogOutRedirect";
import { update, getClicksValue } from "../redux/clicksSlice";

export const Dashboard = () => {
  const dispatch = useDispatch();
  // const numberOfClicks = useSelector((state) => state.clicks.value);
  const numberOfClicks = useSelector(getClicksValue);

  useLogOutRedirect();

  return (
    <div>
      <h2>Dashboard Page</h2>
      <button type="button" onClick={() => dispatch(update())}>
        Number of clicks: {numberOfClicks}
      </button>
    </div>
  );
};
