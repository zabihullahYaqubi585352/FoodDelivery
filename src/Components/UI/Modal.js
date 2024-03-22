import React, { Fragment } from "react";
import { ReactDOM } from "react";
import classes from './Modal.module.css'

const Backdrop = props =>{
return<div className={classes.backdrop}></div>
}
const  ModalOverlay= props =>{
return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
</div>
}

const portalElement=document.getElementById("overlays");
const Modal = props =>{
return <Fragment>
{ReactDOM.createPotal(<ModalOverlay></ModalOverlay>, portalElement)}
{ReactDOM.createPotal(<Backdrop></Backdrop>, portalElement)}
</Fragment>
}
export default Modal;