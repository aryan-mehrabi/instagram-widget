import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "jotai";
import App from "./components/App";
import "./index.css";

const element = document.createElement("div");
document.body.appendChild(element);

const root = createRoot(element);
root.render(
  <Provider>
    <App />
  </Provider>
);
