import React, { useContext, useState } from "react";
import AppContext from "../../store/context";
import Modal from "../Modal/Modal";

function CinemaSelection() {
  const { state } = useContext(AppContext);
  const { cinemas } = state;
  const [modalVisible, setModalVisible] = useState(true);
  const displayCinemas = cinemas.map((cinema) => {
    return <p key={cinema.name}>{cinema.city}</p>;
  });
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::", state);
  return (
    <div>
      Select your cinema
      <Modal visible={modalVisible} onClickOk={() => setModalVisible(false)}>
        {displayCinemas}
      </Modal>
    </div>
  );
}

export default CinemaSelection;
