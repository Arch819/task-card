import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "@radix-ui/themes/styles.css";
import "@smastrom/react-rating/style.css";
import "./index.css";

export const _ = undefined;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
