import React, { useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import AppContext from "../../store/context";
import Modal from "../Modal/Modal";

const baseUrl = process.env.REACT_APP_BASE_URL;

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

  const setSelectedMovies = useCallback(
    (data) => {
      dispatch({ type: "setSelectedMovies", data });
    },
    [dispatch]
  );

  useEffect(() => {
    if (cinemas.length > 0 && !modalCinemaId) {
      setModalCinemaId(cinemas[0]._id);
    }
  }, [cinemas, modalCinemaId]);

  useEffect(() => {
    if (state.selectedCinema) {
      const filteredMovies = state.movies.filter((film) => {
        const foundMovie = state.selectedCinema.repertoire.find((movie) => {
          return movie.movieId === film.movieId;
        });

        return !!foundMovie;
        // return foundMovie ? true : false;
      });
      setSelectedMovies(filteredMovies);
    }
  }, [state.selectedCinema, state.movies, setSelectedMovies]);

  useEffect(() => {
    if (selectedCinema === undefined) {
      const fetchAllCinemas = async () => {
        const result = await axios({
          method: "get",
          url: `${baseUrl}/api/v1/cinemas`,
        });
        dispatch({ type: "setCinemas", data: result.data });
      };
      fetchAllCinemas();
    }

    if (selectedCinema === null || (!selectedCinema && !cinemaLocalStorage)) {
      setModalVisible(true);
    }

    if (cinemas.length > 0 && !selectedCinema && cinemaLocalStorage) {
      const foundCinema = cinemas.find(
        (cinema) => cinema._id === cinemaLocalStorage
      );
      if (foundCinema) {
        dispatch({
          type: "setSelectedCinema",
          data: foundCinema,
        });
      } else {
        dispatch({
          type: "setSelectedCinema",
          data: null,
        });
        localStorage.removeItem("selectedCinemaId");
      }
    }
  }, [cinemaLocalStorage, dispatch, modalCinemaId, selectedCinema, cinemas]);

  const handleCinemaSelection = () => {
    setSelectedCinema(cinemas.find((el) => el._id === modalCinemaId));
    localStorage.setItem("selectedCinemaId", modalCinemaId);
    setModalVisible(false);
  };

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
