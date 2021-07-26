import React from "react";
import styles from "../css/login.module.css";
import Input from "../global/Input";
import Button from "../global/Button";

const SignIn = () => {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.title}>Sign-in</div>
        <Input
          type="text"
          name="Username"
          value={usernamesignin}
          change={setsusersignin}
        />
        <Input
          type="email"
          name="Email"
          value={emailsignin}
          change={setsemailsignin}
        />
        <Input
          type="password"
          name="Password"
          value={passwordsignin}
          change={setspasswordsignin}
        />

        <Button button_name="Sign-in" storedata={storedata} />
        {/* {check && <h2>please enter differant username or email</h2>} */}
      </div>
    </>
  );
};

export default SignIn;
