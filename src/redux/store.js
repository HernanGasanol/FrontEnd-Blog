import { configureStore } from '@reduxjs/toolkit';
import navModalsSlice from './navReducers';
import postsState from './postsState';
import registerState from './registerState'
import users from '../redux/usersState'
import userState from './userState';






export default configureStore({
  reducer: {
    navModalsSlice,
    postsState,
    registerState,
    userState,
    userState,

  },
})

