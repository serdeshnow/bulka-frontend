import React from "react";
import "./Modal.css";
import Button from "../Button/Button";
import crossSVG from "../../assets/svg/cross.svg";
import ReactDOM from "react-dom";

export default function Modal({
  children,
  open,
  onClose,
  titleCont = "Title",
  BtnCont = "Next",
  BtnProps,
  ...props
}) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <div {...props} className="modal">
        <Button onClick={onClose} className="close-btn">
          <img src={crossSVG} alt="" />
        </Button>
        <div className="child-wrapper">
          <h2>{titleCont.toUpperCase()}</h2>
          {children}
          <Button id="next-btn" {...BtnProps}>
            {BtnCont}
          </Button>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
