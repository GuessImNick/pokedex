import React from "react";
import ReactDOM from "react-dom";
import AppViews from "./AppViews";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppViews />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
