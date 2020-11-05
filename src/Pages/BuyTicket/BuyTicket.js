import React, { useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import InitialConfirmation from "./Steps/InitilaConfirmation/InitilaConfirmation";
import SelectSeats from "./Steps/SelectSeats/SelectSeats";
import AppContext from "../../store/context";
import Checkout from "./Steps/Checkout/Checkout";

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
    }

    if (step === 0) {
      navigate(`/movie/${state.ticket.movieId}`);
    }
  }, [state.ticket.movieId, step]);

  return (
    <main>
      {/* {step === 0 ? <InitialConfirmation setStep={setStep} /> : null} */}
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
      {step === 4 ? <Checkout /> : null}
    </main>
  );
};

export default BuyTicket;
