import React, { useRef, useState } from "react";
import classes from "./checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;
const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    city: true,
    postalCode: true,
    street: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const ConfirmHandler = (event) => {
    event.preventDefault();
    const enterName = nameInputRef.current.value;
    const enterStreet = streetInputRef.current.value;
    const enterPostal = postalInputRef.current.value;
    const enterCity = cityInputRef.current.value;

    const enterNameIsValid = !isEmpty(enterName);
    const enterStreetIsValid = !isEmpty(enterStreet);
    const enterCityIsValid = !isEmpty(enterCity);
    const enterPostalCodeIsValid = isFiveChars(enterPostal);
    setFormInputValidity({
      name: enterNameIsValid,
      street: enterStreetIsValid,
      postalCode: enterPostalCodeIsValid,
      city: enterCityIsValid,
    });
    const isFormIsvalid =
      enterNameIsValid &&
      enterStreetIsValid &&
      enterCityIsValid &&
      enterPostalCodeIsValid;

    if (!isFormIsvalid) {
      return;
    }

props.onConfirm({
  name:enterName,
  street:enterStreet,
  city:enterCity,
  postalCode:enterPostal
})

  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputValidity.postalCode ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  return (
    <form onSubmit={ConfirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Enter Valid Name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Enter Valid Street</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postalCode && (
          <p>Enter Valid PostalCode(5 character)</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Enter Valid City</p>}
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={props.onCancle}
          className={classes.cancle}
        >
          Cancle
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
