import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
 const [CartIsShown,setCartIsShown]=useState(false);
  const ShowCartHandler=()=>{
  setCartIsShown(true);
 };
 const HideCartHandler=()=>{
  setCartIsShown(false);
 }
  return (
    <Fragment>
      {CartIsShown && <Cart  onHideCart={HideCartHandler}/>}
      <Header  onShownCart={ShowCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
