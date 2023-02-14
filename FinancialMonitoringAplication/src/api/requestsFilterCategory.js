import { filterCategory } from '../redux/store/financialSlice';
import myAPI from './myAPI';

// Getting filtered tasks by the category selected in them
export const getFilterCategory = category => async dispatch => {
  await myAPI.getFilterCategory(category).then(res => {
    dispatch(filterCategory(res.tasks));
  });
};
