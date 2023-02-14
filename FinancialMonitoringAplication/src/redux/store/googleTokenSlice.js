import {createSlice} from '@reduxjs/toolkit'; // ...Aded createAsyncThunk

const initialState = {
  token: '',
  tableId: {},
};

const googleToken = createSlice({
  name: 'google',
  initialState: initialState,
  reducers: {
    setGoogleToken(state, action) {
      state.token = action.payload.accessToken;
    },
    saveTableId(state, action) {
      state.tableId = action.payload.accessToken;
    },
  },
});

export const googleSelector = {
  getGoogle: state => state.token,
  getTableId: state => state.tableId,
};

export const {setGoogleToken, saveTableId} = googleToken.actions;
export default googleToken;
