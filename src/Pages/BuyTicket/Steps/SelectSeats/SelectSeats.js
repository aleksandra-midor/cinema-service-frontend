import React from "react";

const SelectSeats = () => {
  const nrOfSeats = 20;
  const allSeats = [];
  for (let i = 1; i <= nrOfSeats; i += 1) {
    allSeats.push(i);
  }
  console.log(allSeats);

  return allSeats.map((seat) => {
    return (
      <>
        <input type="checkbox" id={`seat-${seat}`} value={seat} />
        <label htmlFor={seat}>{seat}</label>
      </>
    );
  });
};

export default SelectSeats;
