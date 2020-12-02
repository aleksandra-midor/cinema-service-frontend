import React from "react";
import { render, act, waitFor } from "@testing-library/react";
import { WithProvider } from "../../../../../mockTestData/WithProvider";
import Ticket from "../Ticket";

// From https://github.com/i18next/react-i18next/issues/876
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  getI18n: ()=> {return {language: 'sv'}}
}));

async function renderWrapper() {
  let component;

  act(() => {
    component = render(
      <WithProvider>
        <Ticket/>
      </WithProvider>
    );
  });
  return component;
}

describe("Ticket page testing", () => {
  beforeEach(() => {
    
  });

  test("page renders", async () => {
    const { getByTestId } = await renderWrapper();
    const page = await waitFor(() => getByTestId("Ticket"));
    expect(page).toBeInTheDocument();
  });
});
