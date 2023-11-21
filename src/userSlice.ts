import { createSlice } from "@reduxjs/toolkit";

interface Iuser {
  data: string[];
}
const initialState: Iuser = {
  data: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
