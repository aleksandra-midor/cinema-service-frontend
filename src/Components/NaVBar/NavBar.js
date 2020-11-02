import React, { useContext } from "react";
import { Link } from "@reach/router";
import "./NavBar.scss";

// import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import AppContext from "../../store/context";
import Button from "../Button/Button";

function NavBar() {
  // const { i18 } = useTranslation();
  const { state, dispatch } = useContext(AppContext);
  const { selectedCinema } = state;

  const handleSelectCinema = () => {
    dispatch({ type: "setSelectedCinema", data: null });
  };

  return (
    <header className="NavBar">
      <Link to="/">
        <p className="NavBar_Logo">Cinema Paradiso</p>
      </Link>
      <ul className="NavBar_List">
        <li>
          <select
            onChange={(e) => {
              // console.log(e.target.value);
              // console.log(i18nn());
              i18n.changeLanguage(e.target.value);
            }}
          >
            <option value="sv">SV</option>
            <option value="pl">PL</option>
          </select>
        </li>
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
