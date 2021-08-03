import React from "react";
import styles from "../css/login.module.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Input from "../global/Input";
import Button from "../global/Button";
import { useStore } from "react-redux";
import { useState } from "react";
import setState from "./function/setstate";
import { login } from "../redux/actions";

const Login = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [correct, setcorrect] = useState(false);
  let history = useHistory();
  const data = {
    username,
    password,
  };

  const redirect = () => {
    // console.log("as");
    // history.push({ pathname: "/pizzas", state: { data } });
    // <Redirect path="/pizzas">
  };

  const login = (data) => {
    console.log("user", props.user);
    var find = props.user.find((e) => {
      if (e.username == data.username && e.password == data.password) {
        return true;
      } else {
        return false;
      }
    });
    console.log(find);
    if (find !== undefined) {
      props.loginreducer(data);
      setcorrect(true);
    } else {
      setcorrect(false);
    }
  };

  console.log("user", props.user);

  console.log(username, password);
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
                value={username}
                onChange={(event) => {
                  setState(username, setusername, event.target.value);
                }}
              />
              <p>PASSWORD</p>
              <Input
                type="password"
                name="Password"
                value={password}
                onChange={(event) => {
                  setState(password, setpassword, event.target.value);
                }}
              />
              <Button
                butt
                on_name="Log-in"
                name="Log-in"
                Handleclick={() => login(data)}
              />
              {correct == false ? (
                <h4>Please enter correct username or password</h4>
              ) : (
                ""
              )}
            </Route>
          </div>
        </Switch>
        <Switch>
          <Route path="/" exact>
            {correct && <Redirect to="pizza" />}
          </Route>
        </Switch>
      </div>
    </>
  );
};

const mapstateToprops = (state) => {
  return {
    user: state.register.user,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    loginreducer: (payload) => {
      dispatch({
        type: "login",
        payload,
      });
    },
  };
};

export default connect(mapstateToprops, mapDispatchToprops)(Login);
