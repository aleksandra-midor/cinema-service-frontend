import React from "react";
import { render, act, waitFor, getByTestId } from "@testing-library/react";
import { WithProvider } from "../../../mockTestData/WithProvider";
import MovieImage from "../MovieImage";

async function renderWrapper() {
  let component;

  act(() => {
    component = render(
      <WithProvider>
        <MovieImage />
      </WithProvider>
    );
  });

  return component;
}

describe("MovieImage testing", () => {
  test("MovieImage renders", async () => {
    const { getByTestId } = await renderWrapper();
    const element = await waitFor(() => getByTestId("MovieImage"));
    expect(element).toBeInTheDocument();
  });
});
