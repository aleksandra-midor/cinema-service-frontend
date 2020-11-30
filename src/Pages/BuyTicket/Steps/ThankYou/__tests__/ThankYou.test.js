// import React from "react";
// import { render, act, waitFor, getByTestId } from "@testing-library/react";
// import axiosMock from "axios";
// import { WithProvider } from "../../../../../mockTestData/WithProvider";
// import ThankYou from "../ThankYou";

// async function renderWrapper() {
//   let component;

//   act(() => {
//     component = render(
//       <WithProvider>
//         <ThankYou />
//       </WithProvider>
//     );
//   });

//   return component;
// }

// describe("ThankYou page testing", () => {
//   beforeEach(() => {
//     axiosMock.get.mockResolvedValueOnce({
//       data: {
//         ticket: {
//           seats: [1, 12],
//           movieId: "5f9ec9f5b0286024eceb5cd8",
//           movieTitle: "Pulp Fiction",
//           date: "2020-11-16",
//           hour: "16:30",
//           cinemaId: "5fa2c884539a6449d84da4e1",
//           cinemaName: "Stockholm Paradiso",
//           language: "pl",
//           totalPrice: 400,
//         },
//       },
//     });
//   });

//   test("ThankYou page renders", async () => {
//     const { getByTestId } = await renderWrapper();
//     const page = await waitFor(() => getByTestId("ThankYou page"));
//     expect(page).toBeInTheDocument();
//   });
// });
