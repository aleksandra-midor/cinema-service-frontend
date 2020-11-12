import React, { useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import InitialConfirmation from "./Steps/InitilaConfirmation/InitilaConfirmation";
import SelectSeats from "./Steps/SelectSeats/SelectSeats";
import AppContext from "../../store/context";
import Checkout from "./Steps/Checkout/Checkout";
import ThankYou from "./Steps/ThankYou/ThankYou";

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
      navigate(`/movie/${state.ticket.movieId}`);
    }
  }, [state.ticket, step]);

  if (state.ticket.movieId && state.selectedCinema) {
    return (
      <main>
        {step === 1 ? (
          <InitialConfirmation
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        ) : null}
        {step === 2 ? (
          <SelectSeats
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        ) : null}
        {step === 3 ? (
          <InitialConfirmation
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        ) : null}
        {step === 4 ? (
          <Checkout
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        ) : null}
        {step === 5 ? <ThankYou /> : null}
      </main>
    );
  }
  return null;
};

export default BuyTicket;
