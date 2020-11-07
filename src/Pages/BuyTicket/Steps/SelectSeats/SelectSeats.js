import React, { useContext, useState } from "react";
import AppContext from "../../../../store/context";
import Button from "../../../../Components/Button/Button";

const SelectSeats = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const setTicket = (data) => {
    dispatch({ type: "setTicket", data });
  };

  const handleSelectedSeats = (el) => {
    console.log(el);
    const newState = [...selectedSeats];
    const foundElement = newState.find((element) => element === el);
    if (!foundElement) {
      newState.push(el);
    } else {
      newState.pop(el);
    }
    setSelectedSeats(newState);
  };

  const finalPrice = () => {
    return state.selectedCinema.ticketPrice * selectedSeats.length;
  };

  const nrOfSeats = 20;
  const allSeats = [];
  for (let i = 1; i <= nrOfSeats; i += 1) {
    allSeats.push(i);
  }
  console.log(allSeats);

  return (
    <main>
      <h2>Select your seats</h2>
      {allSeats.map((seat) => {
        return (
          <>
            <input
              type="checkbox"
              id={`seat-${seat}`}
              value={seat}
              onChange={() => handleSelectedSeats(seat)}
            />
            <label htmlFor={`seat-${seat}`}>{seat}</label>
          </>
        );
      })}
      <Button onClick={() => props.handlePreviousStep()}>Back</Button>
      <Button
        onClick={() => {
          setTicket({
            seats: selectedSeats,
            totalPrice: finalPrice(),
          });
          props.handleNextStep();
        }}
      >
        Continue
      </Button>
    </main>
  );
};

export default SelectSeats;
