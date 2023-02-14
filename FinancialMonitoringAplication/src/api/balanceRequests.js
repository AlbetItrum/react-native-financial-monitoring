import {stateCurrentBalance} from '../redux/store/financialSlice';
import myAPI from './myAPI';

// Current balance request
export const getCurrentBalance = () => async dispatch => {
  await myAPI
    .getCurrentBalance()
    .then(res => {
      // Save the resulting balance
      dispatch(stateCurrentBalance(Number(res.values[0][0])));
    })
    .catch(e => {
      // Add custom logic to handle errors
      console.log(e);
    });
};

export const updateCurrentBalance = number => async () => {
  // Request to change the current balance
  await myAPI.updateCurrentBalance(number);
};
