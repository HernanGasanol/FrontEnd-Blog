import { createSlice } from "@reduxjs/toolkit";

// const initialState= {

// }

export const navModalsSlice = createSlice({
  name: "navModal",
  initialState: {
    nav: true,
    search: false,
    loginModal: false,
    registerModal: false,
  },

  reducers: {
    SwitchNavModal: (state, action) => {
      if (action.payload) {
        state.nav = action.payload;
      } else {
        state.nav = !state.nav;
      }
    },
    SwitchSearchModal: (state, action) => {
     
      state.search = !state.search;
    },
    SwitchLoginModal: (state, action) => {
      state.loginModal = !state.loginModal;
    },
    SwitchRegisterModal: (state, action) => {
      state.registerModal = !state.registerModal;
    },
  },
});

export const {
  SwitchNavModal,
  SwitchSearchModal,
  SwitchLoginModal,
  SwitchRegisterModal,
} = navModalsSlice.actions;

export default navModalsSlice.reducer;
