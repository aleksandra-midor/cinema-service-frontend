import React, { useContext } from "react";
import AppContext from "../../../../store/context";
import Button from "../../../../Components/Button/Button";

const InitialConfirmation = (props) => {
  const { state } = useContext(AppContext);
  const { ticket } = state;

  console.log(state.selectedCinema.ticketPrice, ticket.seats);
  return (
    <article>
      <h3>Movie:</h3>
      <p>{ticket.movieTitle}</p>
      <h3>Date:</h3>
      <p>{ticket.date}</p>
      <h3>Hour:</h3>
      <p>{ticket.hour}</p>
      <h3>Single ticket price:</h3>
      <p>
        {state.selectedCinema.ticketPrice}
        &nbsp;kr
      </p>
      {ticket.seats ? (
        <>
          <h3>
            Total price for&nbsp;
            {ticket.seats.length}
            &nbsp;tickets:
          </h3>
          <p>{ticket.totalPrice}</p>
        </>
      ) : null}
      <Button onClick={() => props.handlePreviousStep()}>Back</Button>
      <Button onClick={() => props.handleNextStep()}>Next</Button>
    </article>
  );
};

export default InitialConfirmation;
