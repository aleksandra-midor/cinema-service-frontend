import React from "react";
import { render, act, waitFor, getByTestId } from "@testing-library/react";
import { WithProvider } from "../../../mockTestData/WithProvider";
import Footer from "../Footer";

async function renderWrapper() {
  let component;

  act(() => {
    component = render(
      <WithProvider>
        <Footer />
      </WithProvider>
    );
  });

  return component;
}

describe("Footer testing", () => {
  beforeEach(() => {});

  test("Footer renders", async () => {
    const { getByTestId } = await renderWrapper();
    const footer = await waitFor(() => getByTestId("Footer"));
    expect(footer).toBeInTheDocument();
  });
});
