import React, { useContext } from "react";
import { Link } from "@reach/router";
import "./NavBar.scss";

// import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import AppContext from "../../store/context";

function NavBar() {
  // const { i18 } = useTranslation();
  const { state, dispatch } = useContext(AppContext);
  const { selectedCinema } = state;

  const handleSelectCinema = () => {
    dispatch({ type: "setSelectedCinema", data: null });
  };

  return (
    <header className="NavBar">
      <Link to="/" className="NavBar_Logo">
        <img src="/assets/icons/logo.svg" alt="cinema paradiso logo" />
        Cinema Paradiso
      </Link>
      <ul className="NavBar_List">
        <li>
          <select
            className="NavBar_Link"
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
            }}
          >
            <option value="sv">SV</option>
            <option value="pl">PL</option>
          </select>
        </li>
        <li>
          <Link className="NavBar_Link" to="/movies">
            movies
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="NavBar_Link"
            onClick={() => handleSelectCinema()}
          >
            {selectedCinema ? selectedCinema.city : null}
          </button>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
