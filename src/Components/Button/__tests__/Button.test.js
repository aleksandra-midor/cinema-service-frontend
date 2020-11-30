import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe.only("ThankYou page testing", () => {
  beforeEach(() => {
    render(<Button>Back</Button>);
  });

  test("ThankYou page renders", () => {
    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
