import React from "react";
import { useLocation } from "react-router-dom";
import Info from "./Info";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = (props) => {
  const [itemshow, setitemshow] = useState();
  const { login } = useParams();
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
  // useEffect(() => {
  //   let item;
  //   var find = null;
  //   if (
  //     props.item == null ||
  //     props.item == undefined ||
  //     props.item.length == 0
  //   ) {
  //     let item = JSON.parse(localStorage.getItem("item"));
  //     var find = item.filter((e) => {
  //       console.log(e.username, login);
  //       if (e.username == login) {
  //         return e;
  //       }
  //       console.log(find);
  //     });
  //     props.addcart(find);
  //     console.log(props.item, item);
  //   }
  //   console.log(find);
  //   item = find;
  // });
  return (
    <div>
      {item.map((e) => {
        var reciep = [];
        for (var i = 0; i < e.reciepe.length; i++) {
          reciep.push(e.reciepe[i][0]);
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
