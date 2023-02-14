import {setPost} from '../redux/store/financialSlice';
import myAPI from './myAPI';

// Get all added categories
export const getCategories = () => async dispatch => {
  await myAPI
    .getCategories()
    .then(data => {
      const resTasks = [];
      let resData = data.values;
      if (!resData) {
        resData = [];
      }
      resData.map((e, i) => {
        resTasks.push(e);
      });
      dispatch(setPost(resTasks));
    })
    .catch(e => {
      console.log(e);
    });
};

// Deleting the selected category
export const deleteCategories = id => async dispatch => {
  await myAPI.deleteCategories(id);
  dispatch(getCategories());
};

// Adding a category
export const addListCategories = typeCategory => async dispatch => {
  await myAPI.addList(typeCategory);
  dispatch(getCategories());
};
