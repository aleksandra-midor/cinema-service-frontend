import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../store/context";
import Modal from "../Modal/Modal";

function CinemaSelection() {
  const { state } = useContext(AppContext);
  const { cinemas } = state;
  const [modalVisible, setModalVisible] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [selectedCinema, setSelectedCinema] = useState();

  useEffect(() => {
    if (cinemas.length > 0 && !selectedCinema) {
      console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
      setSelectedCinema(cinemas[0]._id);
    }
  }, [cinemas, selectedCinema]);
  console.log(selectedCinema);
  const displayCinemas = cinemas.map((cinema) => {
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label>
        <input
          type="radio"
          name="cinema"
          key={cinema.name}
          onChange={() => setSelectedCinema(cinema._id)}
          checked={selectedCinema === cinema._id}
        />
        <span>{cinema.city}</span>
      </label>
    );
  });
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::", state);
  return (
    <div>
      Select your cinema
      <Modal
        visible={modalVisible}
        onClickOk={() => setModalVisible(false)}
        title="Select the location of your cinema"
      >
        {displayCinemas}
      </Modal>
    </div>
  );
}

export default CinemaSelection;
