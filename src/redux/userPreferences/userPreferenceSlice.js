import { DARK_THEME, LIGHT_THEME } from "@/app/constants/theme";
import { createSlice } from "@reduxjs/toolkit";

const userpreferenceSlice = createSlice({
  name: "userpreference",
  initialState: {
    theme: LIGHT_THEME,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    },
  },
});

export const { toggleTheme } = userpreferenceSlice.actions;
export default userpreferenceSlice.reducer;
