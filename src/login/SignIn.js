import { React, useState } from "react";
import styles from "../css/login.module.css";
import Input from "../global/Input";
import Button from "../global/Button";
import { connect } from "react-redux";
import setState from "./function/setstate";
import register from "../redux/reducers/register";

const Signin = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  // console.log(username, email, password, props.state);

  const data = {
    username,
    email,
    password,
  };

  // console.log(
  //   "🚀 ~ file: SignIn.js ~ line 76 ~ Signin ~ props.user",
  //   props.user
  // );
  return (
    <>
      <div className={styles.login}>
        <div className={styles.title}>Sign-in</div>
        <p>USERNAME</p>
        <Input
          type="text"
          name="Username"
          value={username}
          onChange={(event) => {
            setState(username, setusername, event.target.value);
          }}
        />
        <p>EMAIL</p>
        <Input
          type="email"
          name="Email"
          value={email}
          onChange={(event) => {
            setState(email, setemail, event.target.value);
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
          button_name="Sign-in"
          name="Sign-in"
          Handleclick={() => props.register(data)}
        />
        {/* {console.log(username, email, password)} */}
        {props.found && <h4>Please enter differant username or email</h4>}
      </div>
    </>
  );
};

const mapstateToprops = (state) => {
  return {
    user: state.register.user,
    found: state.register.found,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    register: (payload) => {
      console.log("dfghjk", payload);

      dispatch({
        type: "Register",
        payload,
      });
    },
  };
};
export default connect(mapstateToprops, mapDispatchToprops)(Signin);
