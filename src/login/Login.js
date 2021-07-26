import React from "react";
import styles from "../css/login.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Input from "../global/Input";
import Button from "../global/Button";
import { Provider } from "react-redux";
import store from "../redux/store";

const Login = () => {
  return (
    <>
      <div>
        <Switch>
          <Provider store={store}>
            <div className={styles.login}>
              <Route path="/" exact>
                <div className={styles.title}> Login </div>
                <Input
                  type="text"
                  name="Username"
                  value={loginuser}
                  Onchange={usernamelogin}
                />
                <Input
                  type="password"
                  name="Password"
                  value={loginpassword}
                  Onchange={userpasswordlogin}
                />
                <Button button_name="Log-in" storedata={checkdata} />
              </Route>
            </div>
          </Provider>
        </Switch>
        {/* <Switch>
          <Route path="/" exact>
            {check && <Redirect to="pizza" />}
          </Route>
        </Switch> */}
      </div>
    </>
  );
};

export default Login;
