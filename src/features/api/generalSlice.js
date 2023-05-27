import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openChat: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.openChat = !state.openChat;
    },
  },
});
export const { setChat } = generalSlice.actions;
export const openChat = (state) => state.general.openChat;
export default generalSlice.reducer;
