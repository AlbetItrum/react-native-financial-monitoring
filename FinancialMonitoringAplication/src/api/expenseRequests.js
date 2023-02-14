import {tasksFilterDate} from '../redux/store/financialSlice';
import myAPI from './myAPI';
import {DATE_STATE} from '../constants/indexConstants';

// Request to get filtered tasks by date from google spreadsheet
// Function takes the selected month and navigation to the error screen
export const getFilteredPosts = (mothYear, navigation) => async dispatch => {
  myAPI
    .getFilteredPosts(mothYear)
    .then(res => {
      dispatch(tasksFilterDate(res.tasks));
    })
    .catch(e => {
      //Add custom logic to handle errors
      console.log(e);
      // Go to error screen
      navigation.navigate('ErrorMessage');
    });
};

// Request to change the selected task by ID
// Function takes (id: selected task, expenditure: boolean expense or income, inputNameValue: expense name, selectItemUse: expense category, inputPriceValue: expense amount, dateAdded: date added tasks)
export const changePosts = (
  id,
  expenditure,
  inputNameValue,
  selectItemUse,
  inputPriceValue,
  dateAdded,
) => {
  myAPI
    .changeAmountPost(
      id,
      expenditure,
      inputNameValue,
      selectItemUse,
      inputPriceValue,
      dateAdded,
    )
    .then(res => console.log(res, 'Task changed'))
    // Go to error screen
    .catch(e => console.log(e, 'ERROR API'));
};

// Adding a task to the main list
export const postTasks =
  (expenses, expensesAmount, selectItemUse, expenditure, dateAdded, TASK_ID) =>
  async () => {
    myAPI.postTasksList(
      expenses,
      expensesAmount,
      selectItemUse,
      expenditure,
      dateAdded,
      TASK_ID,
    );
  };

// Deleting a task by id
export const deletePost = id => async dispatch => {
  myAPI.deletePostTasks(id).then(dispatch(getFilteredPosts(DATE_STATE)));
};
