import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Pizza_edit from "./pizza_edit/Pizza_edit";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/pizza" exact>
          <Pizza_edit />
        </Route>
      </Switch>
    </Router>{" "}
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
