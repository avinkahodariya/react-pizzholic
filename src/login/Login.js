import React from "react";
import styles from "../css/login.module.css";
import { connect } from "react-redux";
import { usernamelogin } from "../redux/actions/index";
import { userpasswordlogin } from "../redux/actions/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Input from "../global/Input";
import Button from "../global/Button";

const mapstateToprops = (state) => {
  return {
    stateusernamelogin: state.usernamelogin,
    stateuserpasswordlogin: state.userpasswordlogin,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    usernamelogin: () => dispatch(usernamelogin()),
    userpasswordlogin: () => dispatch(userpasswordlogin()),
  };
};

const Login = (props) => {
  // const namestate = useSelector((state) => state.usernamelogin);
  // const passwordstate = useSelector((state) => state.userpasswordlogin);
  // const dispatch = useDispatch();
  // console.log();
  return (
    <>
      <div>
        <Switch>
          <div className={styles.login}>
            <Route path="/" exact>
              <div className={styles.title}> Login </div>
              <p>USERNAME</p>
              <Input
                type="text"
                name="Username"
                value={props.stateusernamelogin}
                Onchange={props.usernamelogin}
              />
              <p>PASSWORD</p>
              <Input
                type="password"
                name="Password"
                value={props.stateuserpasswordlogin}
                Onchange={props.userpasswordlogin}
              />
              <Button button_name="Log-in" name="Log-in" />
            </Route>
          </div>
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

// const mapstateToprops = (state) => {
//   return {
//     stateusernamelogin: state.usernamelogin,
//     stateuserpasswordlogin: state.userpasswordlogin,
//   };
// };
// const mapDispatchToprops = (dispatch) => {
//   return {
//     usernamelogin: () => dispatch(usernamelogin()),
//     userpasswordlogin: () => dispatch(userpasswordlogin()),
//   };
// };
export default connect(mapstateToprops, mapDispatchToprops)(Login);
