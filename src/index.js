import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import Cart from "./pizzaedit/Cart";
import PizzaEdit from "./PizzaEditFolder/PizzaEdit";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/pizza" exact>
          <PizzaEdit />
        </Route>
        <Route path="/cart" exact>
          {/* <Cart /> */}
        </Route>
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);
