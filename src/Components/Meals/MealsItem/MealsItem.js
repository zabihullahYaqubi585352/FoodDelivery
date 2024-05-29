import React from "react";
import { useContext } from "react";
import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../../Store/cart-context";


const MealsItem = (props) => {

 const cartCtx=  useContext(CartContext)
    const price= `$${props.price.toFixed(2)}`;


    const addToCartHandler=(amount)=>{
     cartCtx.addItem({
      id:props.id,
      amount:amount,
      price:props.price,
      name:props.name
     })
    }
  return (
    <li className={classes.mealsitem}>
      <div > 
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}> {price}</div>
      </div>
      <div className={classes}>
        <MealsItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};
export default MealsItem;
