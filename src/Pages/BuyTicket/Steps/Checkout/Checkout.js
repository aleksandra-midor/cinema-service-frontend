import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../../../Components/CheckoutForm/CheckoutForm";
// import AppContext from "../../../../store/context";

const Checkout = () =>
  // { selectedProduct, history }
  {
    // const { state } = useContext(AppContext);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const stripeKey = process.env.REACT_APP_STRIPE_KEY;
    const stripePromise = loadStripe(stripeKey);

    return (
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    );
  };
export default Checkout;
