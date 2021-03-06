import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../../../Components/CheckoutForm/CheckoutForm";
import "./Checkout.scss";

const Checkout = (props) =>
  // { selectedProduct, history }
  {
    // const { state } = useContext(AppContext);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const stripeKey = process.env.REACT_APP_STRIPE_KEY;
    const stripePromise = loadStripe(stripeKey);

    return (
      <section className="CheckoutStep">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            handleNextStep={props.handleNextStep}
            handlePreviousStep={props.handlePreviousStep}
          />
        </Elements>
      </section>
    );
  };
export default Checkout;
