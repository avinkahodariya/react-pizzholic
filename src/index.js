import React from "react";
import ReactDOM from "react-dom";
import Pizza_edit from "./pizza_edit/Pizza_edit";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/pizza" exact>
            <Pizaa_edit />
          </Route>
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
