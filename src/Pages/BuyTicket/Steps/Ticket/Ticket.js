import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import AppContext from "../../../../store/context";

import "./Ticket.scss";

const Ticket = () => {
  const { state } = useContext(AppContext);
  const { ticket } = state;
  const { t } = useTranslation();

  return (
    <section className="Ticket">
      <h1>{t("ticket:yourTicket")}</h1>
      <h3>{t("ticket:movie")}</h3>
      <p>{ticket.movieTitle}</p>
      <h3>{t("ticket:date")}</h3>
      <p>{ticket.date}</p>
      <h3>{t("ticket:time")}</h3>
      <p>{ticket.hour}</p>
      <h3>{t("ticket:cinema")}</h3>
      <p>{ticket.cinemaName}</p>
      <h3>{t("ticket:singlePrice")}</h3>
      <p>
        {state.selectedCinema.ticketPrice}
        &nbsp;kr
      </p>
      {ticket.seats ? (
        <>
          <h3>
            {t("ticket:totalPrice")}
            &nbsp;
            {ticket.seats.length}
            &nbsp;
            {t("ticket:tickets")}
          </h3>
          <p>{ticket.totalPrice}</p>
        </>
      ) : null}
    </section>
  );
};

export default Ticket;
