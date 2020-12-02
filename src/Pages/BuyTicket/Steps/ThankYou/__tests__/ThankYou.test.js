import React from "react";
import { render, act, waitFor } from "@testing-library/react";
import { WithProvider } from "../../../../../mockTestData/WithProvider";
import ThankYou from "../ThankYou";

// From https://github.com/i18next/react-i18next/issues/876
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

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

describe("ThankYou page testing", () => {
  beforeEach(() => {
    
  });

  test("ThankYou page renders", async () => {
    const { getByTestId } = await renderWrapper();
    const page = await waitFor(() => getByTestId("ThankYouStep"));
    expect(page).toBeInTheDocument();
  });
});
