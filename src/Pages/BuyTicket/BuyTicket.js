import React, { useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import Ticket from "./Steps/Ticket/Ticket";
import SelectSeats from "./Steps/SelectSeats/SelectSeats";
import AppContext from "../../store/context";
import Checkout from "./Steps/Checkout/Checkout";
import ThankYou from "./Steps/ThankYou/ThankYou";

import "./BuyTicket.scss";

const BuyTicket = () => {
  const { state } = useContext(AppContext);
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    return setStep(step + 1);
  };

  const handlePreviousStep = () => {
    return setStep(step - 1);
  };

  useEffect(() => {
    if (!state.ticket.movieId) {
      navigate("/");
    } else if (step === 0) {
      const foundMovie = state.selectedMovies.find(
        (el) => el._id === state.ticket.movieId
      );
      if (foundMovie) {
        navigate(`/movie/${foundMovie.movieId}`);
      } else {
        navigate(`/`);
      }
    }
  }, [state.selectedMovies, state.ticket, step]);

  if (state.ticket.movieId && state.selectedCinema) {
    return (
      <main className="BuyTicketPage">
        {step === 1 ? (
          <>
            <SelectSeats
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
            <Ticket />
          </>
        ) : null}
        {step === 2 ? (
          <>
            <Checkout
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
            <Ticket />
          </>
        ) : null}
        {step === 3 ? (
          <>
            <ThankYou />
          </>
        ) : null}
      </main>
    );
  }
  return null;
};

export default BuyTicket;
