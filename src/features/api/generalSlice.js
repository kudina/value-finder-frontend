import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});
export const { setAccessToken } = generalSlice.actions;
export const accessToken = (state) => state.general.accessToken;
export default generalSlice.reducer;
