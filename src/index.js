import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.scss";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);