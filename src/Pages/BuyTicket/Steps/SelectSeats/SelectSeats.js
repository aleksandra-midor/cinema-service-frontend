import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AppContext from "../../../../store/context";
import Button from "../../../../Components/Button/Button";

const baseUrl = process.env.REACT_APP_BASE_URL;

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
        url: `${baseUrl}/api/v1/bookedSeats/${state.selectedCinema._id}/${
          state.ticket.movieId
        }/${state.ticket.date}/${state.ticket.hour.replace(":", "_")}`,
      });

      setUnavailableSeats(result.data);
    };
    fetchUnavailableSeats();
  }, []);

  const handleSelectedSeats = (el) => {
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

  return (
    <main>
      <h2>Select your seats</h2>
      <ul>
        {allSeats.map((seat) => {
          return (
            <li key={seat}>
              <input
                type="checkbox"
                disabled={unavailableSeats.find((el) => el === seat)}
                id={`seat-${seat}`}
                value={seat}
                onChange={() => handleSelectedSeats(seat)}
              />
              <label htmlFor={`seat-${seat}`}>{seat}</label>
            </li>
          );
        })}
      </ul>
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
