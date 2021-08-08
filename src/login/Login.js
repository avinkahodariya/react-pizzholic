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
import { useState } from "react";
import setState from "./function/setstate";
import { useEffect } from "react";

const Login = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [correct, setcorrect] = useState(false);
  let history = useHistory();

  const data = {
    username,
    password,
  };
  let reg;

  const login = (data) => {
    reg = JSON.parse(localStorage.getItem("reg"));
    if (reg == null || reg == undefined) {
      reg = [];
    }
    var find = reg.find((e) => {
      if (e.username == data.username && e.password == data.password) {
        props.loginreducer(e.username);
        console.log(data.username);
        return true;
      } else {
        return false;
      }
    });
    if (find !== undefined) {
      props.loginreducer(data);
      history.push(`/${data.username}/pizza`);
    } else {
    }
  };
  useEffect(() => {
    reg = JSON.parse(localStorage.getItem("reg"));
    console.log(reg);
  }, []);
  return (
    <>
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
            <Button name="Log-in" Handleclick={() => login(data)} />
            {/* {correct == false ? (
                <h4>Please enter correct username or password</h4>
              ) : (
                ""
              )} */}
          </Route>
        </div>
      </Switch>
    </>
  );
};

const mapstateToprops = (state) => {
  return {
    user: state.register.user,
    username: state.login.username,
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
