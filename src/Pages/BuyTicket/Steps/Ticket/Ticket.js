import React, { useContext } from "react";
import AppContext from "../../../../store/context";

import "./Ticket.scss";

const Ticket = () => {
  const { state } = useContext(AppContext);
  const { ticket } = state;

  return (
    <section className="Ticket">
      <h1>Your Ticket</h1>
      <h3>Movie:</h3>
      <p>{ticket.movieTitle}</p>
      <h3>Date:</h3>
      <p>{ticket.date}</p>
      <h3>Hour:</h3>
      <p>{ticket.hour}</p>
      {/* <h3>Cinema:</h3>
      <p>{ticket.cinemaName}</p> */}
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
    </section>
  );
};

export default Ticket;
