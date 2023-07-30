import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";

const element = document.createElement("div");
document.body.appendChild(element);

const root = createRoot(element);
root.render(<App />)