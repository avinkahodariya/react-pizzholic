import React from "react";
import style from "./pizza.module.css";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div>
      <div className={style.holic}>Welcome To Pizzaholic</div>
      <div className={style.Header}>{/* <p>WELCOME TO PIZZAHOLIC</p> */}</div>
      <div className={style.menu}>Menu</div>
    </div>
  );
};

export default Header;
