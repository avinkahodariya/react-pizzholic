import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./login/Login";
import Signin from "./login/SignIn";
import PizzaEdit from "./PizzaEditFolder/PizzaEdit";
import styles from "./css/login.module.css";
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
          <div className={styles.main}>
            <Login />

            <Link to="/signin" style={{ textDecoration: "none" }}>
              {" "}
              <button>SIGN-IN</button>
            </Link>
          </div>
        </Route>

        <Route path="/signin" exact>
          <div className={styles.main}>
            <Signin />

            <Link to="/" style={{ textDecoration: "none" }}>
              <button>LOG-IN</button>
            </Link>
          </div>
        </Route>

        <Route path="/pizza" exact>
          <App />
        </Route>
        <Route path="/pizzaedit" exact>
          <PizzaEdit />
        </Route>
        <Route path="/cart" exact></Route>
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);
