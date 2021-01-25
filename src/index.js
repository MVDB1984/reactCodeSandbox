import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ChangeUser from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <App login="MVDB1984" />
  </>,
  rootElement
);
