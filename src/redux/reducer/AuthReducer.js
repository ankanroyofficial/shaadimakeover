import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  token: '',
  isMakeupArtist: false,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    //TOKEN
    changeProfileTypeRequest(state, action) {
      state.isMakeupArtist = action.payload;
    },
  },
});

export const {changeProfileTypeRequest} = AuthSlice.actions;

export default AuthSlice.reducer;
