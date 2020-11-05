/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from "react-stripe-elements";
import axios from "axios";
import "./CheckoutForm.scss";
import { navigate } from "@reach/router";

const CheckoutForm = ({ selectedProduct, stripe }) => {
  if (!selectedProduct) navigate("/");

  const [receiptUrl, setReceiptUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { token, error } = await stripe.createToken();
    console.log(stripe, error);

    if (token) {
      const order = await axios.post(
        "http://localhost:5001/api/v1/stripe/charge",
        {
          amount: "10000",
          // selectedProduct.price.toString().replace(".", ""),
          source: token.id,
          receipt_email: "customer@example.com",
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
        <button type="submit" className="order-button">
          Pay
        </button>
      </form>
    </div>
  );
};

export default injectStripe(CheckoutForm);
