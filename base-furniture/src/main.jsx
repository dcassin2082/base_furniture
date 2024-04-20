import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Slide, ToastContainer } from "react-toastify";
import { store } from "./utils/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-right" autoClose={500} />
    </Provider>
  </>
);
