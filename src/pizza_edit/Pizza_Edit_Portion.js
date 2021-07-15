import React from "react";
import capsicum from "./capsicum.png";
import corn from "./corn.png";
import olive from "./olive.png";
import tometo from "./tometo.png";
import masroom from "./masroom.png";
import onion from "./onion.png";
import brokoli from "./brokoli.png";
import pizzaedit from "./pizza-edit.png";
import styles from "./pizzaedit.module.css";

const Pizza_Edit_Portion = () => {
  const i = [];

  i.push(
    <div className={styles.absolute}>
      <img src={masroom} className={styles.imagespan} />
    </div>
  );
  i.push(
    <div className={styles.absolute}>
      <img src={olive} className={styles.imagespan} />
    </div>
  );
  i.push(
    <div className={styles.absolute}>
      <img src={brokoli} className={styles.imagespan} />
    </div>
  );
  i.push(
    <div className={styles.absolute}>
      <img src={onion} className={styles.imagespan} />
    </div>
  );
  i.push(
    <div className={styles.absolute}>
      <img src={tometo} className={styles.imagespan} />
    </div>
  );
  i.push(
    <div className={styles.absolute}>
      <img src={capsicum} className={styles.imagespan} />
    </div>
  );
  i.push(
    <div className={styles.absolute}>
      <img src={corn} className={styles.imagespan} />
    </div>
  );

  return (
    <div className={styles.image}>
      <div className={styles.piz_edi}>
        <div style={{ position: "relative" }}>
          <img
            src={pizzaedit}
            style={{
              width: "500px",
              height: "500px",
              left: "337px",
              top: "1px",
            }}
          />

          <div className={styles.edit_main}> {i}</div>
        </div>
      </div>
    </div>
  );
};

export default Pizza_Edit_Portion;
