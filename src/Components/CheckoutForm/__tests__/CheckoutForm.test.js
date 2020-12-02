import React from "react";
import { render, act, waitFor } from "@testing-library/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { WithProvider } from "../../../mockTestData/WithProvider";
import CheckoutForm from "../CheckoutForm";

// From https://github.com/i18next/react-i18next/issues/876
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  getI18n: () => {
    return { language: "sv" };
  },
}));

const stripeKey = process.env.REACT_APP_STRIPE_KEY;
const stripePromise = loadStripe(stripeKey);

async function renderWrapper() {
  let component;

  act(() => {
    component = render(
      <WithProvider>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </WithProvider>
    );
  });
  return component;
}

describe("CheckoutForm testing", () => {
  beforeEach(() => {});

  test("component renders", async () => {
    const { getByTestId } = await renderWrapper();
    const page = await waitFor(() => getByTestId("CheckoutForm"));
    expect(page).toBeInTheDocument();
  });
});
