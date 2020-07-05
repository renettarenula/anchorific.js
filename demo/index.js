import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App.js";

const Element = () => {
  return <App />;
};

let Content = document.getElementById("content");

ReactDOM.render(<Element />, Content);
