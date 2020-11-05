import React, { useContext } from "react";
import AppContext from "../../../../store/context";
import Button from "../../../../Components/Button/Button";

const InitialConfirmation = (props) => {
  const { state } = useContext(AppContext);
  const finalPrice = () => {
    return state.selectedCinema.ticketPrice * state.ticket.seats.length;
  };

  console.log(state.selectedCinema.ticketPrice, state.ticket.seats);
  return (
    <article>
      <h3>Movie:</h3>
      <p>{state.ticket.movieTitle}</p>
      <h3>Date:</h3>
      <p>{state.ticket.date}</p>
      <h3>Hour:</h3>
      <p>{state.ticket.hour}</p>
      <h3>Single ticket price:</h3>
      <p>
        {state.selectedCinema.ticketPrice}
        &nbsp;kr
      </p>
      {state.ticket.seats ? (
        <>
          <h3>
            Final price for&nbsp;
            {state.ticket.seats.length}
            &nbsp;tickets:
          </h3>
          <p>{finalPrice()}</p>
        </>
      ) : null}
      <Button onClick={() => props.handlePreviousStep()}>Back</Button>
      <Button onClick={() => props.handleNextStep()}>Next</Button>
    </article>
  );
};

export default InitialConfirmation;
