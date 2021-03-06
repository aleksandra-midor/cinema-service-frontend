import React from "react";
import { render, act, waitFor } from "@testing-library/react";
import { WithProvider } from "../../../mockTestData/WithProvider";
import AllMovies from "../AllMovies";

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
        <AllMovies/>
      </WithProvider>
    );
  });
  return component;
}

describe("AllMovies page testing", () => {
  beforeEach(() => {
    
  });

  test("page renders", async () => {
    const { getByTestId } = await renderWrapper();
    const page = await waitFor(() => getByTestId("AllMovies"));
    expect(page).toBeInTheDocument();
  });
});
