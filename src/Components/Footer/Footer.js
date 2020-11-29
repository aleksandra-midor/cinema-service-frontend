import React, { useContext } from "react";
import AppContext from "../../store/context";
import "./Footer.scss";

const Footer = () => {
  const { state } = useContext(AppContext);
  // eslint-disable-next-line no-unused-vars
  const cinema = state.selectedCinema;

  return (
    <footer className="Footer">
      {cinema ? (
        <div className="Footer_Container">
          <div className="Footer_Column">
            <p className="Footer_CinemaName">{cinema.name}</p>
            <p>{`${cinema.address}, ${cinema.city}`}</p>
          </div>
          <div className="Footer_Column">
            <p>
              tel: &nbsp;
              <a href={`tel:{${cinema.phone}`}>{cinema.phone}</a>
            </p>
            <p>
              <a href={`mailto:${cinema.email}`}>{cinema.email}</a>
            </p>
          </div>
        </div>
      ) : null}
    </footer>
  );
};

export default Footer;
