import React, { useContext } from "react";
import { Link } from "@reach/router";
import "./NavBar.scss";
import AppContext from "../../store/context";
import Button from "../Button/Button";

function NavBar() {
  const { state, dispatch } = useContext(AppContext);
  const { selectedCinema } = state;
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", selectedCinema);

  const handleSelectCinema = () => {
    dispatch({ type: "setSelectedCinema", data: null });
  };

  return (
    <header className="NavBar">
      <Link to="/">
        <p className="NavBar_Logo">Cinema Paradiso</p>
      </Link>
      <ul className="NavBar_List">
        <Link to="/movies">
          <li>movies</li>
        </Link>
        <li>
          <Button onClick={() => handleSelectCinema()}>
            {selectedCinema ? selectedCinema.city : null}
          </Button>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
