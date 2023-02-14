import {getFilteredPosts} from '../api/expenseRequests';

// function to change the display of the month or year
// currentDate: getting the date to display, setCurrentDate:adding changes by current date
export const changeCalendar = (currentDate, setCurrentDate, changeMonth) => {
  return dispatch => {
    const date = new Date(currentDate.setMonth(changeMonth));
    setCurrentDate(date);
    const dateCurrent = date.toLocaleDateString();
    const mothYear = dateCurrent.slice(3, dateCurrent.length);
    dispatch(getFilteredPosts(mothYear));
  };
};
