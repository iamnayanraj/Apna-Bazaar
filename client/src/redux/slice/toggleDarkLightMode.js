import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const toggleDarkLightModeSlice = createSlice({
  name: "toggleDarkLightMode",
  initialState: initialState,
  reducers: {
    toggleDarkLightMode(state, action) {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
  },
});

export const { toggleDarkLightMode } = toggleDarkLightModeSlice.actions;
export default toggleDarkLightModeSlice.reducer;
