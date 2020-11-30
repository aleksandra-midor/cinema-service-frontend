import React from "react";
import { render, act, waitFor, getByTestId } from "@testing-library/react";
import axiosMock from "axios";
import { WithProvider } from "../../../../../mockTestData/WithProvider";
import ThankYou from "../ThankYou";

async function renderWrapper() {
  let component;

  act(() => {
    component = render(
      <WithProvider>
        <ThankYou />
      </WithProvider>
    );
  });
  return component;
}

describe.only("ThankYou page testing", () => {
  beforeEach(() => {

  });

  test("ThankYou page renders", async () => {
    const { getByTestId } = await renderWrapper();
    const page = await waitFor(() => getByTestId("ThankYouStep"));
    expect(page).toBeInTheDocument();
  });
});
