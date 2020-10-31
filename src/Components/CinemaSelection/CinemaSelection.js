import React, {
  //  useContext,
  useState,
} from "react";
// import AppContext from "../../store/context";
import Modal from "../Modal/Modal";

function CinemaSelection() {
  // const { state } = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(true);

  // console.log("::::::::::::::::::::::::::::::::::::::::::::::::::", state);
  return (
    <div>
      Select your cinema
      <Modal visible={modalVisible} onClickOk={() => setModalVisible(false)}>
        ***** ***
      </Modal>
    </div>
  );
}

export default CinemaSelection;
