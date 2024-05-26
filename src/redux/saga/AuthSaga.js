import {call, put, select, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
let getItem = state => state.AuthReducer;


//token
// export function* getIsSignUpCompleteSaga() {
//   //   let item = yield select(getItem);
//   try {
//     const response = yield call(AsyncStorage.getItem, 'signUpComplete');
//     if (response != null) {
//       yield put(getIsSignUpCompleteSuccess(response));
//     } else {
//       yield put(getIsSignUpCompleteSuccess(null));
//     }
//   } catch (error) {
//     console.error('getIsSignUpCompleteSaga', error);
//   }
// }

//country

// export function* getCountrySaga(action) {
//   let items = yield select(getItem);

//   let header = {
//     Accept: 'application/json',
//     contenttype: 'application/json',
//     // authorization: items.token,
//   };

//   try {
//     const response = yield call(getApi, 'api/country-list', header);

//     if (response.data.status == true) {
//       yield put(getCountrySuccess(response.data));
//     } else {
//       yield put(getCountryFailure(response.data));
//       Toast(response?.data?.message);
//     }
//   } catch (error) {
//     console.error('getCountrySaga', error);
//   }
// }
//country
 
// export function* getCitySaga(action) {
//   let items = yield select(getItem);

//   let header = {
//     Accept: 'application/json',
//     contenttype: 'application/json',
//     // authorization: items.token,
//   };

//   try {
//     const response = yield call(
//       postApi,
//       'api/city-list',
//       action.payload,
//       header,
//     );

//     if (response.data.status == true) {
//       yield put(citySuccess(response.data));
//     } else {
//       console.error('getCitySaga', response.data);
//       yield put(cityFailure(response.data));
//       Toast(response?.data?.message);
//     }
//   } catch (error) {
//     console.error('getCitySaga', error);
//   }
// }

const watchFunction = [
  // (function* () {
  //   yield takeLatest('Auth/getTokenRequest', getTokenSaga);
  // })(),
];

export default watchFunction;
