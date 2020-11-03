import React from "react";
// import Button from "../Button/Button";

const BuyTicket = () => {
  const step = 0;

  return (
    <main>
      {step === 0 ? <p>Step 0</p> : null}
      {step === 1 ? <p>Step 1</p> : null}
      {step === 2 ? <p>Step 2</p> : null}
    </main>

    // <div>
    //   <header>{children}</header>
    //   {onPreviousClick ? (
    //     <Button onClick={onPreviousClick}>Previous</Button>
    //   ) : null}
    //   {onNextClick ? <Button onClick={onNextClick}>Next</Button> : null}
    // </div>
  );
};

export default BuyTicket;
