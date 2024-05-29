import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
 const [CartIsShown,setCartIsShown]=useState(false);
  const ShowCartHandler=()=>{
  setCartIsShown(true);
 };
 const HideCartHandler=()=>{
  setCartIsShown(false);
 }
  return (
    <CartProvider>
      {CartIsShown && <Cart  onHideCart={HideCartHandler}/>}
      <Header  onShownCart={ShowCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
