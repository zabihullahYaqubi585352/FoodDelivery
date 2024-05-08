import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const CartItem = (
    <ul className={classes.listitem}>
      {[{ id: "c1", name: "Makarani", price: 20.99, amount: 2 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onclose={props.onHideCart}>
      {CartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>43.99</span>
      </div>
      <div className={classes.action}>
        <button className={classes.close} onClick={props.onHideCart}> Close</button>
        <button className={classes.order}> Order </button>
      </div>
    </Modal>
  );
};

export default Cart;
