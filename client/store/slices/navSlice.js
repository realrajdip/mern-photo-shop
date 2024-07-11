import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    sideBar: false,
    tab: "",
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !sidebar;
    },
    setTab: (state, action) => {
        state.tab = action.payload; 
    }
  },
});


export const {toggleSidebar, setTab } = navSlice.actions;
export default navSlice.reducer; 
