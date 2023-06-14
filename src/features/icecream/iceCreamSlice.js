import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcecreams: 20,
};

import { cakeActions } from "../cake/cakeSlice";

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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
