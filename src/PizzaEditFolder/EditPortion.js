import React from "react";
import * as All from "../assets/images.js";
import styles from "./pizzaedit.module.css";
import EditPizzaInfo from "./EditPizzaInfo";

const Pizza_Edit_Portion = (props) => {
  let reciepeArray = props.reciepe;
  console.log(reciepeArray);

  var i = [];

  i = props.reciepe.map((e) => {
    var compo = e;
    return (
      <div className={styles.absolute}>
        <img src={e[1][0][1]} name={e[0]} className={styles.imagespan} />
      </div>
    );
  });
  console.log(props.ingreinfo);
  return (
    <>
      <div className={styles.PizzaImageMaking}>
        <img src={All.pizzaedit} className={styles.PizzaMainImage} />

        {i}
      </div>
      {/* <EditPizzaInfo
        name={props.name}
        price={props.price}
        ingreinfo={props.ingreinfo}
      /> */}
    </>
  );
};

export default Pizza_Edit_Portion;
