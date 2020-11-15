import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AppContext from "../../../../store/context";
import Button from "../../../../Components/Button/Button";

import "./SelectSeats.scss";

const baseUrl = process.env.REACT_APP_BASE_URL;

const SelectSeats = (props) => {
  const { state, dispatch } = useContext(AppContext);
  // const [selectedSeats, setSelectedSeats] = useState([]);
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
    let newState = [];

    if (state.ticket.seats) {
      newState = [...state.ticket.seats];
    }
    const foundElement = newState.find((element) => element === el);
    if (!foundElement) {
      newState.push(el);
    } else {
      newState = newState.filter((item) => item !== foundElement);
    }
    setTicket({
      seats: newState,
      totalPrice: state.selectedCinema.ticketPrice * newState.length,
    });
  };

  const nrOfSeats = 25;
  const allSeats = [];
  for (let i = 1; i <= nrOfSeats; i += 1) {
    allSeats.push(i);
  }

  return (
    <section className="SelectSeatsStep">
      <div className="SelectSeatsStep_Container">
        <h2>Select your seats</h2>

        <div className="SelectSeatsStep_Screen">Screen</div>
        <ul className="SeatSelector">
          {allSeats.map((seat) => {
            return (
              <li key={seat}>
                <label className="SeatSelector_Seat" htmlFor={`seat-${seat}`}>
                  <input
                    type="checkbox"
                    disabled={unavailableSeats.find((el) => el === seat)}
                    id={`seat-${seat}`}
                    value={seat}
                    onChange={() => {
                      handleSelectedSeats(seat);
                    }}
                  />
                  <span className="SeatSelector_Chair" />
                  {seat}
                </label>
              </li>
            );
          })}
        </ul>
        <Button onClick={() => props.handlePreviousStep()}>Back</Button>
        <Button
          // disabled={state.ticket.seats.length === 0}
          onClick={() => {
            // setTicket({
            //   seats: selectedSeats,
            //   totalPrice: finalPrice(),
            // });
            props.handleNextStep();
          }}
        >
          Continue
        </Button>
      </div>
    </section>
  );
};

export default SelectSeats;
