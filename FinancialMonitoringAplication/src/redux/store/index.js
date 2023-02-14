import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './financialSlice';
import googleToken from './googleTokenSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    google: googleToken.reducer,
  },
  middleware: [thunk],
});

export default store;
