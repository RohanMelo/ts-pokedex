import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "Hello!"
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    }
  }
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;