import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AppContext from "../../../../store/context";
import Button from "../../../../Components/Button/Button";

const SelectSeats = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [unavailableSeats, setUnavailableSeats] = useState([]);

  const setTicket = (data) => {
    dispatch({ type: "setTicket", data });
  };

  useEffect(() => {
    const fetchUnavailableSeats = async () => {
      const result = await axios({
        method: "get",
        url: `http://localhost:5001/api/v1/bookedSeats/${state.selectedCinema._id}/${state.ticket.movieId}/${state.ticket.date}/${state.ticket.hour}`,
      });
      console.log("..................", state);
      setUnavailableSeats(result.data);
    };
    fetchUnavailableSeats();
  }, []);

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

  const nrOfSeats = 25;
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
              disabled={unavailableSeats.find((el) => el === seat)}
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
