import React from "react";
import capsicam from "./capsicam.png";
import cheese from "./cheese.png";
import paper from "./papaer.png";
import olive from "./olive.png";
import tometo from "./tometo.png";
import masroom from "./masroom.png";
import pizzaedit from "./pizza-edit.png";
import styles from "./pizzaedit.module.css";

const Pizza_Edit_Portion = () => {
  return (
    <div className={styles.image}>
      <img src={pizzaedit} style={{ width: "500px", height: "500px" }} />
    </div>
  );
};

export default Pizza_Edit_Portion;
