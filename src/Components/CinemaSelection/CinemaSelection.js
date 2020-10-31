import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AppContext from "../../store/context";
import Modal from "../Modal/Modal";

function CinemaSelection() {
  const { state, dispatch } = useContext(AppContext);
  const {
    cinemas,
    // selectedCinema
  } = state;
  const [modalVisible, setModalVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cinema, setCinema] = useState();

  const [cinemaLocalStorage] = useState(
    localStorage.getItem("selectedCinemaId")
  );

  const setSelectedCinema = (data) =>
    dispatch({ type: "setSelectedCinema", data });

  useEffect(() => {
    if (cinemas.length > 0 && !cinema) {
      setCinema(cinemas[0]._id);
    }
  }, [cinemas, cinema]);

  useEffect(() => {
    if (!cinemaLocalStorage) {
      setModalVisible(true);
      const fetchAllCinemas = async () => {
        const result = await axios({
          method: "get",
          url: "http://localhost:5001/api/v1/cinemas",
        });

        dispatch({ type: "setCinemas", data: result.data });
      };
      fetchAllCinemas();
    }
  }, [cinemaLocalStorage, dispatch]);

  const handleCinemaSelection = () => {
    setSelectedCinema(cinemas.find((el) => el._id === cinema));
    localStorage.setItem("selectedCinemaId", cinema);
    setModalVisible(false);
  };

  console.log(cinema);

  const displayCinemas = cinemas.map((el) => {
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label>
        <input
          type="radio"
          name="cinema"
          key={el.name}
          onChange={() => setCinema(el._id)}
          checked={cinema === el._id}
        />
        <span>{el.city}</span>
      </label>
    );
  });
  return (
    <div>
      <Modal
        visible={modalVisible}
        onClickOk={handleCinemaSelection}
        title="Select the location of your cinema"
      >
        {displayCinemas}
      </Modal>
    </div>
  );
}

export default CinemaSelection;
