import React from "react";
import "./Modal.scss";
import Button from "../Button/Button";

const Modal = ({ children, visible, onClickOk }) => {
  if (visible) {
    return (
      <div className="Modal">
        <section className="Modal_Inner">
          <h1>Modal</h1>
          {children}
          <footer>
            <Button onClick={onClickOk} color="primary">
              Button
            </Button>
          </footer>
        </section>
      </div>
    );
  }
  return null;
};

export default Modal;
