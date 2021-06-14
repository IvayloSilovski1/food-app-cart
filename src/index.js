import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.Fragment class="bg-secondary">
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
