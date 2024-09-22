import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const iceCreams = useSelector((state) => state.icecream.noOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice-cream - {iceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice-cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice-creams
      </button>
    </div>
  );
};
