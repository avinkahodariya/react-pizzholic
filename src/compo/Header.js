import React from "react";
import style from "../pizza.module.css";
// import Header from "../global/Header";
const Header = () => {
  return (
    <>
      <div className={style.holic}>Welcome To Pizzaholic</div>
      <div className={style.Header}></div>
      <div className={style.menu}>Menu</div>
    </>
  );
};

export default Header;
