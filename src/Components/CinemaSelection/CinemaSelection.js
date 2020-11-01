import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AppContext from "../../store/context";
import Modal from "../Modal/Modal";

function CinemaSelection() {
  const { state, dispatch } = useContext(AppContext);
  const { cinemas, selectedCinema } = state;
  const [modalVisible, setModalVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [modalCinemaId, setModalCinemaId] = useState();

  const [cinemaLocalStorage] = useState(
    localStorage.getItem("selectedCinemaId")
  );

  const setSelectedCinema = (data) =>
    dispatch({ type: "setSelectedCinema", data });

  useEffect(() => {
    if (cinemas.length > 0 && !modalCinemaId) {
      setModalCinemaId(cinemas[0]._id);
    }
  }, [cinemas, modalCinemaId]);

  useEffect(() => {
    if (selectedCinema === undefined) {
      const fetchAllCinemas = async () => {
        const result = await axios({
          method: "get",
          url: "http://localhost:5001/api/v1/cinemas",
        });

        dispatch({ type: "setCinemas", data: result.data });
      };

      fetchAllCinemas();
    }

    if (selectedCinema === null || (!selectedCinema && !cinemaLocalStorage)) {
      setModalVisible(true);
    }

    if (!selectedCinema && cinemaLocalStorage) {
      const fetchOneCinema = async () => {
        const result = await axios({
          method: "get",
          url: `http://localhost:5001/api/v1/cinemas/${cinemaLocalStorage}`,
        });
        dispatch({ type: "setSelectedCinema", data: result.data });
      };
      fetchOneCinema();
    }
  }, [cinemaLocalStorage, dispatch, modalCinemaId, selectedCinema]);

  const handleCinemaSelection = () => {
    console.log(modalCinemaId);
    setSelectedCinema(cinemas.find((el) => el._id === modalCinemaId));
    localStorage.setItem("selectedCinemaId", modalCinemaId);
    setModalVisible(false);
  };

  console.log(modalCinemaId);

  const displayCinemas = cinemas.map((el) => {
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label key={el._id}>
        <input
          type="radio"
          name="cinema"
          key={el.name}
          onChange={() => setModalCinemaId(el._id)}
          checked={modalCinemaId === el._id}
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
