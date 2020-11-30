import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import AppContext from "../../../../store/context";
import "./ThankYou.scss";

const ThankYou = () => {
  const { t } = useTranslation();
  const { state } = useContext(AppContext);
  const { ticket } = state;

  return (
    <section className="ThankYouStep" data-testid="ThankYouStep">
      <h1>
        {t("thankYou:ticketFor")}
        &nbsp;
      </h1>
      <p>
        {t("thankYou:thisIsYourTicket")}
        <br />
        {t("thankYou:showItOrPrintIt")}
      </p>
      <br />
      <h2>
        {t("thankYou:details")}
        :&nbsp;
      </h2>
      <p>
        <small>
          {t("thankYou:movie")}
          :&nbsp;
        </small>
        <strong>{ticket.movieTitle}</strong>
      </p>
      <p>
        <small>
          {t("thankYou:date")}
          :&nbsp;
        </small>
        <strong>{ticket.date}</strong>
      </p>
      <p>
        <small>
          {t("thankYou:time")}
          :&nbsp;
        </small>
        <strong>{ticket.hour}</strong>
      </p>
      <p>
        <small>
          {t("thankYou:seats")}
          :&nbsp;
        </small>
        <strong>
          {ticket.seats.length > 1 ? ticket.seats.join(", ") : ticket.seats[0]}
        </strong>
      </p>
      <p>
        <small>
          {t("thankYou:cinema")}
          :&nbsp;
        </small>
        <strong>{ticket.cinemaName}</strong>
      </p>
      <p>
        <small>
          {t("thankYou:price")}
          :&nbsp;
        </small>
        <strong>
          {ticket.totalPrice}
          &nbsp;SEK
        </strong>
      </p>
      <br />
      <h3>{t("thankYou:thankYou")}</h3>
    </section>
  );
};
export default ThankYou;
