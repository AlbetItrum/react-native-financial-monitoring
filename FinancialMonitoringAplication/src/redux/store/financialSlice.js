import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [], //added tasks
  switchRemains: false, //switch position to display the forecast balance
  tasksFiler: [], //getting filtered tasks
  changingTask: {}, //working with a modified task
  currentBalance: [],
  idChangeExpenses: 0,
  taskCategory: [],
  getToken: '',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    setGetToken(state, action) {
      state.getToken = action.payload;
    },
    setPost(state, action) {
      state.posts = action.payload;
    },
    tasksFilterDate(state, action) {
      state.tasksFiler = action.payload;
    },
    filterCategory(state, action) {
      state.taskCategory = action.payload;
    },
    clickSwitchRemains(state, action) {
      state.switchRemains = action.payload;
    },
    stateChangingTask(state, action) {
      state.changingTask = action.payload;
    },
    stateCurrentBalance(state, action) {
      state.currentBalance = action.payload;
    },
    setChangeIdExpenses(state, action) {
      state.idChangeExpenses = action.payload;
    },
  },
});

export const counterSelector = {
  getCounter: state => state.posts,
  getBalance: state => state.switchRemains,
  getFilterTasks: state => state.tasksFiler,
  getCategoriesTask: state => state.taskCategory,
  getChangeTasks: state => state.changingTask,
  getCurrent: state => state.currentBalance,
  getIdChange: state => state.idChangeExpenses,
  getTokenGoogle: state => state.getToken,
};

export const {
  setGetToken,
  setPost,
  stateCurrentBalance,
  actionMonth,
  filterCategory,
  tasksFilterDate,
  clickSwitchRemains,
  stateChangingTask,
  setChangeIdExpenses,
} = counterSlice.actions;
export default counterSlice;
