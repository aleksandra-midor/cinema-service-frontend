import React from "react";
import "./Modal.scss";
import Button from "../Button/Button";

const Modal = ({ children }) => {
  return (
    <div className="Modal">
      <section className="Modal_Inner">
        <h1>Modal</h1>
        {children}
      </section>
      <Button />
    </div>
  );
};

export default Modal;
