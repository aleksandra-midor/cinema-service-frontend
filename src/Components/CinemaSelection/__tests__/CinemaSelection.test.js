import React from "react";
import { render, act, waitFor } from "@testing-library/react";
import { WithProvider } from "../../../mockTestData/WithProvider";
import CinemaSelection from "../CinemaSelection";

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
        <CinemaSelection />
      </WithProvider>
    );
  });
  return component;
}

describe("CinemaSelection testing", () => {
  beforeEach(() => {});

  test("component renders", async () => {
    const { getByTestId } = await renderWrapper();
    const page = await waitFor(() => getByTestId("CinemaSelection"));
    expect(page).toBeInTheDocument();
  });
});
