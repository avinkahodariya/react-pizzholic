import React from "react";
import { useLocation } from "react-router-dom";
import Info from "./Info";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Cart = (props) => {
  const { login } = useParams();
  console.log(props.username, props.item);
  // console.log(props.item, item);
  let item;
  var find = null;
  if (props.item == null || props.item == undefined || props.item.length == 0) {
    let item = JSON.parse(localStorage.getItem("item"));
    var find = item.filter((e) => {
      console.log(e.username, login);
      if (e.username == login) {
        return e;
      }
      console.log(find);
    });
    props.addcart(find);
    console.log(props.item, item);
  }
  console.log(find);
  item = find;
  useEffect(() => {
    item = JSON.parse(localStorage.getItem("item"));
  });
  return (
    <div>
      {item.map((e) => {
        var reciep = [];
        for (var i = 0; i < e.reciepe.length; i++) {
          // console.log(e, e.name, e.reciepe[i]);
          reciep.push(e.reciepe[i][0]);
          // console.log(reciep);
        }

        return (
          <div>
            <img
              src={e.image}
              style={{
                borderRadius: "1em",
                width: "15%",
                height: "200px",
              }}
            />
            {}
            <Info ingrediants={reciep} name={e.name} price={e.price} />
          </div>
        );
      })}
    </div>
  );
};

const mapstateToprops = (state) => {
  return {
    username: state.login.username,
    item: state.addcart.item,
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
  };
};

export default connect(mapstateToprops, mapDispatchToprops)(Cart);

// {
//   for(i=0;i>6;i++)
//   {
// if(idArray[])
//   }
// }
