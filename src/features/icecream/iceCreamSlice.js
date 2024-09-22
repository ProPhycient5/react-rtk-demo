// const createSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit";
// const { cakeActions } = require("../cake/cakeSlice");
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  noOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfIceCream--;
    },
    restocked: (state, action) => {
      state.noOfIceCream += action.payload;
    },
  },
  //extraReducers are used when we update or interfere with other action type
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.noOfIceCream--;
    });
  },
});

// module.exports = iceCreamSlice.reducer;
export default iceCreamSlice.reducer;

// module.exports.iceCreamActions = iceCreamSlice.actions;
export const { ordered, restocked } = iceCreamSlice.actions;
