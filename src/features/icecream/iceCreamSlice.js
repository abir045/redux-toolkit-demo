import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcecreams: 20,
};

import { ordered as cakeOrdered } from "../cake/cakeSlice";

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
