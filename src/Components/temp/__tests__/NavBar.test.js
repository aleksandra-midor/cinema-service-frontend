import React from "react";
import { render, act, waitFor, getByTestId } from "@testing-library/react";
// import { Router } from "@reach/router";
import { WithProvider } from "../../../mockTestData/WithProvider";
import NavBar from "../NavBar";

async function renderWrapper() {
  let component;

  act(() => {
    component = render(
      <WithProvider>
        <NavBar />
      </WithProvider>
    );
  });

  return component;
}

describe("NavBar testing", () => {
  test("NavBar renders", async () => {
    const { getByTestId } = await renderWrapper();
    const element = await waitFor(() => getByTestId("NavBar"));
    expect(element).toBeInTheDocument();
  });

  test("Language selection renders", async () => {
    const { getByTestId } = await renderWrapper();
    const list = await waitFor(() => getByTestId("NavBar_List"));
    expect(list).toBeInTheDocument();
  });

  test("Link to AllMovies renders", async () => {
    const { getByTestId } = await renderWrapper();
    const link = await waitFor(() => getByTestId("NavBar_Link"));
    expect(link).toBeInTheDocument();
  });
});
