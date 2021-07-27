import React from "react";
import styles from "../css/login.module.css";
import Input from "../global/Input";
import Button from "../global/Button";

const SignIn = () => {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.title}>Sign-in</div>
        <p>USERNAME</p>
        <Input type="text" name="Username" />
        <p>EMAIL</p>
        <Input type="email" name="Email" />
        <p>PASSWORD</p>
        <Input type="password" name="Password" />
        <Button button_name="Sign-in" name="Sign-in" />
        {/* {check && <h2>please enter differant username or email</h2>} */}
      </div>
    </>
  );
};

export default SignIn;
