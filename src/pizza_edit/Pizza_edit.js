import React, { useState } from "react";
import Nav from "./Nav";
import Pizzanav from "./Pizzanav";
import Pizza_Edit_Portion from "./Pizza_Edit_Portion";
import styles from "./pizzaedit.module.css";
import Pizzabox from "../Pizzabox";
import { useLocation } from "react-router-dom";
import italian from "../italian.jpg";
import Footer from "../Footer";
const Pizza_edit = (props) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const location = useLocation();

  const handleChange = (event) => {
    console.log(checkedItems);
    if (event.target.checked) {
      console.log(checkedItems, event.target.name);
      setCheckedItems([...checkedItems, event.target.name]);
    } else {
      console.log(checkedItems);
      let name = event.target.getAttribute("name");
      console.log();

      setCheckedItems(checkedItems.filter((item) => item !== name));
    }
  };

  const AddToCart = () => {
    console.log(checkedItems);
    console.log(location.state.data.id, location.state.data.price);
    let data = JSON.parse(localStorage.getItem("data"));
    if (data == undefined || data == null) {
      data = [];
    }
    data.push({
      ingredients: location.state.data.ingredients,
      price: location.state.data.price,
      name: location.state.data.name,
      id: location.state.data.id,
    });
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
  };
  // {
  //   window.scrollTo(0, 0);
  // }
  return (
    <div>
      <div className={styles.pizzarelative}>
        {" "}
        <Pizza_Edit_Portion reciepe={checkedItems} />
      </div>

      <Nav
        ingre={location.state.data.ingredients}
        price={location.state.data.price}
        name={location.state.data.name}
        id={location.state.data.id}
        image={location.state.data.image}
        handleChange={handleChange}
        AddToCart={AddToCart}
      />

      <Footer />
    </div>
  );
};

export default Pizza_edit;
