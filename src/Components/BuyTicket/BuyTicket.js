import React from "react";
import Button from "../Button/Button";

const BuyTicket = ({ children, onPreviousClick, onNextClick }) => {
  return (
    <div>
      <header>{children}</header>
      {onPreviousClick ? (
        <Button onClick={onPreviousClick}>Previous</Button>
      ) : null}
      {onNextClick ? <Button onClick={onNextClick}>Next</Button> : null}
    </div>
  );
};

export default BuyTicket;
