/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { navigate } from "@reach/router";

import axios from "axios";
import AppContext from "../../store/context";
import "./CheckoutForm.scss";

const CheckoutForm = () => {
  const { state, dispatch } = useContext(AppContext);

  if (!state.ticket.movieId) navigate("/");

  // const [receiptUrl, setReceiptUrl] = useState("");

  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  const [paymentSucess, setPaymentSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  // const [email, setEmail] = useState("m.przybylowski@outlook.com");

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
        "http://localhost:5001/api/v1/stripe/charge",
        {
          receiptEmail: state.ticket.customerEmail,
          ticket: state.ticket,
        }
      );

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: state.ticket.customerEmail,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      const confirmPayment = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      console.log("confirmCardPayment", confirmPayment);

      if (confirmPayment.error) {
        setCheckoutError(confirmPayment.error.message);
        setProcessingTo(false);
        return;
      }

      setPaymentSuccess(true);
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    // style: iframeStyles,
    hidePostalCode: true,
  };

  if (!paymentSucess) {
    return (
      <div className="checkout-form">
        {/* <p>Amount: ${selectedProduct.price}</p> */}
        <form onSubmit={handleSubmit}>
          <CardElement
            options={cardElementOpts}
            onChange={handleCardDetailsChange}
          />
          <label>
            <input
              value={state.ticket.customerEmail}
              onChange={
                (event) =>
                  setTicket({
                    customerEmail: event.target.value,
                    cinemaId: state.selectedCinema._id,
                    cinemaName: state.selectedCinema.name,
                  })
                // eslint-disable-next-line react/jsx-curly-newline
              }
            />
          </label>
          <button
            type="submit"
            className="order-button"
            disabled={isProcessing || !stripe}
          >
            {isProcessing ? "Processing..." : `Pay $${state.ticket.totalPrice}`}
          </button>
        </form>
        {checkoutError ? <span>checkoutError</span> : null}
      </div>
    );
  }
  return <h1>payment successful</h1>;
};

export default CheckoutForm;
