import { useContext } from "react";
import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  const CartItem = (
    <ul className={classes.listitem}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onclose={props.onHideCart}>
      {CartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.action}>
        <button className={classes.close} onClick={props.onHideCart}>
          {" "}
          Close
        </button>
        {hasItem && <button className={classes.order}> Order </button>}
      </div>
    </Modal>
  );
};

export default Cart;
