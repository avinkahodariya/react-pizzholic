import React, { useState, useEffect } from "react";
import NavForIngrediants from "./NavForIngrediants";
import { connect } from "react-redux";
import EditPortion from "./EditPortion";
import styles from "./pizzaedit.module.css";
import { useHistory, useLocation } from "react-router-dom";
import * as All from "../assets/images";
import Footer from "../global/Footer";
import Button from "../global/Button";
import { memo } from "react";
// import { addToCart } from "./Function/addToCart";
import { useParams } from "react-router-dom";

const PizzaEdit = (props) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [data, setdata] = useState({
    ingredients: 1,
    price: 1,
    name: 1,
    id: 0,
    image: 1,
    reciepe: [1],
    usernmae: 1,
  });
  const [item, setitem] = useState([1]);
  const [reg, setreg] = useState([1]);
  var { id, login } = useParams();
  let history = useHistory();
  var location = useLocation();
  var pid = useParams().id;
  console.log("🚀 ~ file: PizzaEdit.js ~ line 131 ~ pizzaid ~ pizzaid", data);
  var ingredients = data.ingredients;
  var price = data.price;
  var name = data.name;
  var id = data.id;
  var image = data.image;
  var reciepe = checkedItems;
  var username = login;

  const handleChange = (event) => {
    console.log(checkedItems, event);

    if (event.target.checked) {
      console.log(checkedItems);

      console.log(...checkedItems);

      setCheckedItems([
        ...checkedItems,
        [
          event.target.name,
          ingredients.filter((e) => {
            if (event.target.name == e[0]) {
              return e[1];
            }
          }),
        ],
      ]);
    } else {
      let name = event.target.getAttribute("name");

      setCheckedItems(checkedItems.filter((item) => item[0] !== name));
    }
  };

  const addToCart = (data) => {
    // console.log(
    //   "🚀 ~ file: PizzaEdit.js ~ line 60 ~ addToCart ~ props.user.length",
    //   props.user.length
    // );
    if (props.user.length == 0) {
      // let reg = JSON.parse(localStorage.getItem("reg"));
      var a = reg.find((e) => {
        if (e.username == login) {
          // console.log("🚀 ~ file: PizzaEdit.js ~ line 63 ~ a ~ login", login);
          // console.log(
          //   "🚀 ~ file: PizzaEdit.js ~ line 63 ~ a ~ e.username",
          //   e.username
          // );
          return e;
        }
      });
      // console.log("🚀 ~ file: PizzaEdit.js ~ line 71 ~ a ~ a", a);

      props.register(a);
    } else {
      var check = props.user.find((e) => {
        if (e.username == login) {
          // console.log(
          //   "🚀 ~ file: PizzaEdit.js ~ line 76 ~ check ~ login",
          //   login
          // );
          // console.log(
          //   "🚀 ~ file: PizzaEdit.js ~ line 76 ~ check ~ e.username",
          //   e.username
          // );
          return true;
        } else {
          return false;
        }
      });
      if (check == false) {
        history.push(`/`);
      }
      // let item = JSON.parse(localStorage.getItem("item"));
      if (item == null) {
        item = [];
        item.push(data);
        console.log(item);
        localStorage.setItem("item", JSON.stringify(item));
      } else {
        item.push(data);
        localStorage.setItem("item", JSON.stringify(item));
      }

      props.addcart(data);
    }
  };
  const gotocart = () => {
    history.push(`${location.pathname}/cart`);
  };

  useEffect((id) => {
    let pizaadata = JSON.parse(localStorage.getItem("pizzastore"))[0];

    let pizzaid = pizaadata.find((e) => {
      if (e.id == pid) {
        return e;
      }
    });
    console.log(
      "🚀 ~ file: PizzaEdit.js ~ line 131 ~ pizzaid ~ pizzaid",
      pizzaid
    );

    setdata(pizzaid);
  }, []);

  useEffect(() => {
    let item = JSON.parse(localStorage.getItem("item"));
    setitem(item);
  }, []);
  useEffect(() => {
    let reg = JSON.parse(localStorage.getItem("reg"));
    setreg(reg);
  }, []);

  return (
    <>
      <div className={styles.flex}>
        <p className={styles.pizzatitle}>
          Let`s Crete Your Own Pizza
          <img
            src={All.icon}
            style={{
              width: "50px",
              height: "100%",
              float: "right",
              marginRight: "5px",
              backdropFilter: "bllur(10px)",
              backgroundColor: "#313131",
            }}
            onClick={gotocart}
          />
        </p>
        <div className={styles.pizzarelative}>
          {" "}
          <EditPortion
            reciepe={checkedItems}
            // name={name}
            // price={price}
            // ingreinfo={ingredients}
            data={data}
          />
        </div>

        <NavForIngrediants
          // ingre={ingredients}
          // price={price}
          // name={name}
          // id={id}
          // image={image}
          handleChange={handleChange}
          data={data}
        />

        <Button
          name={"Buy Now..."}
          className={styles.center}
          Handleclick={gotocart}
        />

        <Button
          name={"Add To Cart.."}
          className={styles.center}
          Handleclick={() => addToCart(data)}
        />

        <Footer />
      </div>
    </>
  );
};

const mapstateToprops = (state) => {
  return {
    username: state.login.username,
    item: state.addcart.item,
    user: state.register.user,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    addcart: (payload) => {
      dispatch({
        type: "addcart",
        payload,
      });
    },
    register: (payload) => {
      dispatch({
        type: "register",
        payload,
      });
    },
  };
};

export default connect(mapstateToprops, mapDispatchToprops)(PizzaEdit);
