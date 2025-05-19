import { createSlice } from "@reduxjs/toolkit";

const userpreferenceSLice = createSlice({
  name: "userpreference",
  initialState: {
    theme: "light",
  },
  reducers: {},
});

export default userpreferenceSLice.reducer; 
