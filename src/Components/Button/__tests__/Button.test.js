import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  beforeEach(() => {
    render(<Button>Back</Button>);
  });

  test("component renders", () => {
    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
