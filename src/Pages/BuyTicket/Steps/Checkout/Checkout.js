import React, { useContext, useEffect } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import CheckoutForm from "../../../../Components/CheckoutForm/CheckoutForm";
import AppContext from "../../../../store/context";

const Checkout = () =>
  // { selectedProduct, history }
  {
    const { state } = useContext(AppContext);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <StripeProvider apiKey="pk_test_51HjoVnEiHRoAiJES5agETO5zFHFYCvVDH5eICMASDxRIp4dBhY9JqS5HWnaxtvUEJwybrR7phYENR4rp87qZ6D4600a1M5EvFq">
        <Elements>
          <CheckoutForm selectedProduct={state.ticket} />
        </Elements>
      </StripeProvider>
    );
  };
export default Checkout;
