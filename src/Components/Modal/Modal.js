import React from "react";
import "./Modal.scss";
import Button from "../Button/Button";

const Modal = ({ children, visible, onClickOk, title }) => {
  if (visible) {
    return (
      <div className="Modal">
        <section className="Modal_Inner">
          <p className="Modal_Title">{title}</p>
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
