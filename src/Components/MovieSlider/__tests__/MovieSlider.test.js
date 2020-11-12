import React from "react";
import { render } from "@testing-library/react";
import MovieSlider from "../MovieSlider";
import mockMovies from "../../../mockTestData/movies.json";

describe("Testing MovieSlider component", () => {
  let component;
  beforeEach(() => {
    component = render(<MovieSlider count={3} movies={mockMovies} />);
  });

  test("render movie slider", async () => {
    const { getByTestId } = component;
    await expect(getByTestId("MovieSlider")).toBeInTheDocument();
  });
  test("render given number of movies", async () => {
    const { findAllByTestId } = component;
    const movie = await findAllByTestId("MovieSlider_Image");
    expect(movie).toHaveLength(3);
  });
});
