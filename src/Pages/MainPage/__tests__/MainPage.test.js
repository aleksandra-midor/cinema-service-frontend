import React from "react";
import { render, act, waitFor, fireEvent } from "@testing-library/react";
import { getTestStore, WithProvider } from "../../../mockTestData/WithProvider";
import MainPage from "../MainPage";

async function renderWrapper() {
  let component;

  act(() => {
    component = render(
      <WithProvider>
        <MainPage path="/" />
      </WithProvider>
    );
  });

  return component;
}

describe.only("MainPage testing", () => {
  beforeEach(() => {
    // axiosMock.get.mockResolvedValueOnce({
    //   data: {
    //     _id: "123123123",
    //     firstName: "john",
    //     lastName: "doe",
    //     email: "john@gmail.com",
    //     products: [],
    //   },
    // });
  });

  test("MainPage renders", async () => {
    const { getByTestId } = await renderWrapper();
    // const { state } = getTestStore();
    const element = await waitFor(() => getByTestId("MainPage"));
    expect(element).toBeInTheDocument();
  })
});