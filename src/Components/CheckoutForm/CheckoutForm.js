/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { navigate } from "@reach/router";
import { useTranslation } from "react-i18next";

import axios from "axios";
import AppContext from "../../store/context";
import "./CheckoutForm.scss";
import Button from "../Button/Button";

const baseUrl = process.env.REACT_APP_BASE_URL;

const CheckoutForm = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  if (!state.ticket.movieId) navigate("/");

  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
 
  const [email, setEmail] = useState();

  const stripe = useStripe();
  const elements = useElements();

  const setTicket = (data) => {
    dispatch({ type: "setTicket", data });
  };

  const handleCardDetailsChange = (ev) => {
    if (ev.error) {
      setCheckoutError(ev.error.message);
    } else {
      setCheckoutError();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setProcessingTo(true);

    const cardElement = elements.getElement("card");

    try {
      const { data: clientSecret } = await axios.post(
        `${baseUrl}/api/v1/payment/intent`,
        {
          receiptEmail: email,
          ticket: state.ticket,
        }
      );

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: email,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      const confirmPayment = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (confirmPayment.error) {
        setCheckoutError(confirmPayment.error.message);
        setProcessingTo(false);
        return;
      }

      const updatedTicket = {
        ...state.ticket,
        customerEmail: email,
        paymentId: confirmPayment.paymentIntent.id,
        paymentStatus: "confirmed",
      };

      const confirmation = await axios.post(
        `${baseUrl}/api/v1/payment/confirm`,
        {
          ticket: updatedTicket,
        }
      );

      if (confirmation.error) {
        setCheckoutError(confirmation.error.message);
        setProcessingTo(false);
        return;
      }

      setTicket(updatedTicket);
      props.handleNextStep();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    hidePostalCode: true,
  };

  function validateEmail() {
    // from https://www.w3resource.com/javascript/form/email-validation.php
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true;
    }
    return false;
  }

  return (
    <>
      <div className="CheckoutForm">
        <form onSubmit={handleSubmit}>
          <h2>{t("checkOut:payment")}</h2>
          <span>{t("checkOut:cardDetails")}</span>
          <CardElement
            options={cardElementOpts}
            onChange={handleCardDetailsChange}
          />
          <label>
            <span>{t("checkOut:email")}</span>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <button
            type="submit"
            className="order-button"
            disabled={isProcessing || !stripe || !validateEmail()}
          >
            {isProcessing
              ? `${t("checkOut:process")}`
              : `${t("checkOut:pay")} ${state.ticket.totalPrice} SEK`}
          </button>
        </form>
        {checkoutError ? (
          <span className="Message-error">checkoutError:{checkoutError}</span>
        ) : null}
      </div>
      <div className="BuyTicket_Buttons">
        <Button onClick={() => props.handlePreviousStep()}>
          {t("checkOut:back")}
        </Button>
      </div>
    </>
  );
};

export default CheckoutForm;
