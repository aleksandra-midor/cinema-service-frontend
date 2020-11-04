import React, { useContext } from "react";
import AppContext from "../../../../store/context";
import Button from "../../../../Components/Button/Button";

const InitialConfirmation = (props) => {
  const { state } = useContext(AppContext);

  return (
    <article>
      <p>{state.ticket.movieTitle}</p>
      <p>{state.ticket.date}</p>
      <p>{state.ticket.hour}</p>
      <Button onClick={() => props.handlePreviousStep()}>Back</Button>
      <Button onClick={() => props.handleNextStep()}>Select seats</Button>
    </article>
  );
};

export default InitialConfirmation;
