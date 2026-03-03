import ReactDOM from "react";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { App } from "./src/components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
