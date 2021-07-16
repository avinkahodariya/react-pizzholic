import React from "react";
import Capsicum from "./capsicum.png";
import Corn from "./corn.png";
import olive from "./olive.png";
import tometo from "./tometo.png";
import Mozzarella from "./Mozzarella.png";
import masroom from "./masroom.png";
import onion from "./onion.png";
import brokoli from "./brokoli.png";
import pizzaedit from "./pizza-edit.png";
import styles from "./pizzaedit.module.css";

const Pizza_Edit_Portion = (props) => {
  let reciepeArray = props.reciepe;
  console.log(reciepeArray);

  var i = [];

  for (var j = 0; j < reciepeArray.length; j++) {
    console.log(reciepeArray);
    if (reciepeArray[j] == "Capsicum") {
      console.log(j);
      i.push(
        <div className={styles.absolute}>
          <img
            src={Capsicum}
            name={reciepeArray[j]}
            className={styles.imagespan}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Corn") {
      i.push(
        <div className={styles.absolute}>
          <img src={Corn} name={reciepeArray[j]} className={styles.imagespan} />
        </div>
      );
    }
    if (reciepeArray[j] == "Mozzarella") {
      i.push(
        <div className={styles.absolute}>
          <img
            src={Mozzarella}
            name={reciepeArray[j]}
            className={styles.imagespan}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Brokoli") {
      i.push(
        <div className={styles.absolute}>
          <img
            src={brokoli}
            name={reciepeArray[j]}
            className={styles.imagespan}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Olive") {
      i.push(
        <div className={styles.absolute}>
          <img
            src={olive}
            name={reciepeArray[j]}
            className={styles.imagespan}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Tomato") {
      i.push(
        <div className={styles.absolute}>
          <img
            src={tometo}
            name={reciepeArray[j]}
            className={styles.imagespan}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Masroom") {
      i.push(
        <div className={styles.absolute}>
          <img
            src={masroom}
            name={reciepeArray[j]}
            className={styles.imagespan}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Onion") {
      i.push(
        <div className={styles.absolute}>
          <img
            src={onion}
            name={reciepeArray[j]}
            className={styles.imagespan}
          />
        </div>
      );
    }
  }

  return (
    <div className={styles.pizzzzzzzza}>
      <div className={styles.pizaimagecircle}>
        <img src={pizzaedit} />
      </div>

      {/* <div className={styles.edit_main}>
        <div className={styles.imageabs}>
          <div className={styles.ingreabsolute}>{i}</div>
        </div>
      </div> */}
      {i}
    </div>
  );
};

export default Pizza_Edit_Portion;
