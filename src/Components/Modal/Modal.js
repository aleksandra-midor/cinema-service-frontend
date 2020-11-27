import React from "react";
import "./Modal.scss";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";

const Modal = ({ children, visible, onClickOk, title }) => {
  const { t } = useTranslation();
  if (visible) {
    return (
      <div className="Modal">
        <section className="Modal_Inner">
          <p className="Modal_Title">{title}</p>
          <div className="Modal_Content">{children}</div>
          <footer className="Modal_Footer">
            <Button onClick={onClickOk} color="primary">
              {t("modal:confirm")}
            </Button>
          </footer>
        </section>
      </div>
    );
  }
  return null;
};

export default Modal;
