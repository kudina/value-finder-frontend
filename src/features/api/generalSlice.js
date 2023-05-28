import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openChat: false,
  chatList: true,
  clientWall: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.openChat = !state.openChat;
    },
    setChatList: (state, action) => {
      state.chatList = action.payload;
    },
    setClientWall: (state, action) => {
      state.clientWall = action.payload;
    },
  },
});
export const { setChat, setChatList, setClientWall } = generalSlice.actions;
export const openChat = (state) => state.general.openChat;
export const chatList = (state) => state.general.chatList;
export const clientWall = (state) => state.general.clientWall;
export default generalSlice.reducer;
