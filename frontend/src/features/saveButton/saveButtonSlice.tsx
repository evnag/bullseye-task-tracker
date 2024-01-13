import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isActive: boolean;
};

const initialState: InitialState = {
  isActive: false,
};

const saveButtonSlice = createSlice({
  name: "saveButton",
  initialState,
  reducers: {
    succeedValidated: (state) => {
      state.isActive = true;
    },
    clicked: (state) => {
      state.isActive = false;
    },
  },
});

export default saveButtonSlice.reducer;
export const { succeedValidated, clicked } = saveButtonSlice.actions;
