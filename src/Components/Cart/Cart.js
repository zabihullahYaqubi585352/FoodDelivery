import { useContext, useState } from "react";
import React from "react";
import CartIte from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
import Checkout from "./checkout";

const Cart = (props) => {
  const [IsCheckout, setIsCheckout] = useState(false);
  const [issubmiting, setissubmiting] = useState(false);
  const [didsubmite, setdidsubmite] = useState(false);

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const orderHandler = () => {
    setIsCheckout(true);
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const submitOrderHandler = (userData) => {
    setissubmiting(true);
    fetch(
      "https://react-food-delivery-dc2b9-default-rtdb.firebaseio.com/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItem: cartCtx.items,
        }),
      }
    );
    setissubmiting(false);
    setdidsubmite(true);
    cartCtx.clearCart()
  };

  const CartItem = (
    <ul className={classes.listitem}>
      {cartCtx.items.map((item) => (
        <CartIte
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const MyModle = (
    <div className={classes.action}>
      <button className={classes.close} onClick={props.onHideCart}>
        {" "}
        Close
      </button>
      {hasItem && (
        <button className={classes.order} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModleContent=(
  <React.Fragment>
     {CartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {IsCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancle={props.onHideCart} />
      )}

      {!IsCheckout && MyModle}
  </React.Fragment>)

  const issubmitingModleContent = <p>sending user data...</p>;
   const didsubmiteModleContent = <React.Fragment>
    <p>successfuly send the order.</p>
    <div className={classes.action}>
      <button className={classes.order} onClick={props.onHideCart}>
        {" "}
        Close
      </button>
    
    </div>
   </React.Fragment>

  return (
    <Modal onclose={props.onHideCart}>
     {!issubmiting &&!didsubmite && cartModleContent}
     {issubmiting && issubmitingModleContent}
     { !issubmiting && didsubmite && didsubmiteModleContent}
    </Modal>
  );
};

export default Cart;
