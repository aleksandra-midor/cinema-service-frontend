import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import AppContext from "../../../../store/context";
import Button from "../../../../Components/Button/Button";

import "./SelectSeats.scss";

const baseUrl = process.env.REACT_APP_BASE_URL;

const SelectSeats = (props) => {
  const { state, dispatch } = useContext(AppContext);
  // const [selectedSeats, setSelectedSeats] = useState([]);
  const [unavailableSeats, setUnavailableSeats] = useState([]);
  const { t } = useTranslation();

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
  }, [
    state.selectedCinema._id,
    state.ticket.movieId,
    state.ticket.date,
    state.ticket.hour,
  ]);

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
        <h2>{t("selectSeats:selectSeats")}</h2>

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
                    checked={!!state.ticket.seats.find((item) => item === seat)}
                  />
                  <span className="SeatSelector_Chair" />
                  {seat}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="BuyTicket_Buttons">
        <Button onClick={() => props.handlePreviousStep()}>
          {t("selectSeats:back")}
        </Button>
        <Button
          disabled={state.ticket.seats.length === 0}
          onClick={() => {
            props.handleNextStep();
          }}
        >
          {t("selectSeats:continue")}
        </Button>
      </div>
    </section>
  );
};

export default SelectSeats;
