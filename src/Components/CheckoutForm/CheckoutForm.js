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

  const { state } = useContext(AppContext);
  const [receiptUrl, setReceiptUrl] = useState("");
  const [email, setEmail] = useState("m.przybylowski@outlook.com");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { token, error } = await stripe.createToken();
    console.log(stripe, error);

    if (token) {
      const order = await axios.post(
        "http://localhost:5001/api/v1/stripe/charge",
        {
          // amount: "10000",
          // selectedProduct.price.toString().replace(".", ""),
          source: token.id,
          receiptEmail: email,
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
