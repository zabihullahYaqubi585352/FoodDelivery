import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const CartItem = <ul>{[
    { id: "c1", name: "Makarani", price: 20.99, amount: 2 },
  ].map((item) => <li>{item.name}</li>)}</ul>;

  return (
    <div>
      
      {CartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>43.99</span>
      </div>
      <div className={classes.action}>
        <button className={classes.button}> Cancle</button>
        <button> Order </button>
      </div>
    </div>
  );
};

export default Cart;
