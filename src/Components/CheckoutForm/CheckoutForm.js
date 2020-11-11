/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from "react-stripe-elements";
import axios from "axios";
import AppContext from "../../store/context";
import "./CheckoutForm.scss";

const CheckoutForm = ({ selectedProduct, stripe }) => {
  if (!selectedProduct) navigate("/");

  const { state, dispatch } = useContext(AppContext);
  const [receiptUrl, setReceiptUrl] = useState("");
  // const [email, setEmail] = useState("m.przybylowski@outlook.com");

  const setTicket = (data) => {
    dispatch({ type: "setTicket", data });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { token } = await stripe.createToken();

    if (token) {
      const order = await axios.post(
        "http://localhost:5001/api/v1/stripe/charge",
        {
          // amount: "10000",
          // selectedProduct.price.toString().replace(".", ""),
          source: token.id,
          receiptEmail: state.ticket.customerEmail,
          ticket: state.ticket,
        }
      );
      setReceiptUrl(order.data.charge.receipt_url);
    }
  };

  if (receiptUrl) {
    return (
      <div className="success">
        <h2>Payment Successful!</h2>
        <a href={receiptUrl}>View Receipt</a>
        {/* <Link to="/">Home</Link> */}
      </div>
    );
  }
  return (
    <div className="checkout-form">
      {/* <p>Amount: ${selectedProduct.price}</p> */}
      <form onSubmit={handleSubmit}>
        <label>
          Card details
          <CardNumberElement />
        </label>
        <label>
          Expiration date
          <CardExpiryElement />
        </label>
        <label>
          CVC
          <CardCVCElement />
        </label>
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
        <button type="submit" className="order-button">
          Pay
        </button>
      </form>
    </div>
  );
};

export default injectStripe(CheckoutForm);
