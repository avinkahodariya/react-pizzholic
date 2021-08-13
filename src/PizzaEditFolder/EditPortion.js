import React from "react";
import * as All from "../assets/images.js";
import styles from "./pizzaedit.module.css";
import EditPizzaInfo from "./EditPizzaInfo";

const Pizza_Edit_Portion = (props) => {
  let reciepeArray = props.reciepe;
  console.log(props.data);

  var i = [];

  i = props.data.reciepe.map((e) => {
    // var compo = e;
    console.log(
      "🚀 ~ file: EditPortion.js ~ line 21 ~ i=props.data.reciepe.map ~ e",
      e
    );
    return (
      <div className={styles.absolute}>
        <img src={e} name={props.data.name} className={styles.imagespan} />
      </div>
    );
  });

  // useEffect(() => {}, []);

  return (
    <>
      <div className={styles.PizzaImageMaking}>
        <img src={All.pizzaedit} className={styles.PizzaMainImage} />

        {i}
      </div>
    </>
  );
};

export default Pizza_Edit_Portion;
