import React, { useContext, useEffect } from "react";
import { Link } from "@reach/router";
import { useTranslation, getI18n } from "react-i18next";
import i18n, { languages, fallbackLng } from "../../i18n/i18n";
import AppContext from "../../store/context";
import "./NavBar.scss";

function NavBar() {
  const { state, dispatch } = useContext(AppContext);
  const { selectedCinema } = state;
  const { t } = useTranslation();

  const handleSelectCinema = () => {
    dispatch({ type: "setSelectedCinema", data: null });
  };

  // changes selected language to a fallbackLng if not foound
  const currentLanguage = getI18n().language;
  useEffect(() => {
    if (languages.indexOf(currentLanguage) === -1) {
      i18n.changeLanguage(fallbackLng);
    }
  }, [currentLanguage]);

  return (
    <header className="NavBar" data-testid="NavBar">
      <Link to="/" className="NavBar_Logo">
        <img src="/assets/icons/logo.svg" alt="cinema paradiso logo" />
        Cinema Paradiso
      </Link>
      <ul className="NavBar_List" data-testid="NavBar_List">
        <li>
          <select
            className="NavBar_Link"
            select={currentLanguage}
            defaultValue={currentLanguage}
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
            }}
          >
            <option value="sv">SV</option>
            <option value="pl">PL</option>
          </select>
        </li>
        <li>
          <Link className="NavBar_Link" to="/movies" data-testid="NavBar_Link">
            {t("navBar:movies")}
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
