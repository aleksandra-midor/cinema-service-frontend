import React from "react";
import "./Modal.scss";
import Button from "../Button/Button";

const Modal = ({ children, visible, onClickOk, title }) => {
  if (visible) {
    return (
      <div className="Modal">
        <section className="Modal_Inner">
          <p className="Modal_Title">{title}</p>
          <div className="Modal_Content">{children}</div>
          <footer className="Modal_Footer">
            <Button onClick={onClickOk} color="primary">
              Confirm
            </Button>
          </footer>
        </section>
      </div>
    );
  }
  return null;
};

export default Modal;
