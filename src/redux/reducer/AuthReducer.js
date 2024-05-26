import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  token: '',
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    //TOKEN
    // getTokenRequest(state, action) {
    //   state.isLoading = true;
    //   state.status = action.type;
    // },
    // getTokenSuccess(state, action) {
    //   state.isLoading = false;
    //   state.token = action.payload;
    //   state.status = action.type;
    // },
    // getTokenFailure(state, action) {
    //   state.isLoading = false;
    //   state.error = action.error;
    //   state.status = action.type;
    // },
  },
});

export const {
  // getTokenRequest,
  // getTokenSuccess,
  // getTokenFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;
