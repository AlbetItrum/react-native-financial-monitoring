import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import NavigationBar from '../../navigation/NavigationBar';
import {styles} from './styles/styleHome';
import ExpenseSheet from './components/ExpenseSheet';
import TransactionCalendar from './components/TransactionCalendar';
import BalanceSheetForecast from './components/BalanceSheetForecast';
import ModalHome from './components/ModalHome';
import {useDispatch, useSelector} from 'react-redux';
import Chart from './components/ChartKit';
import {DATE_STATE, TASK_ID} from '../../constants/indexConstants';
import {
  getCurrentBalance,
  updateCurrentBalance,
} from '../../api/balanceRequests';
import {
  deletePost,
  getFilteredPosts,
  postTasks,
} from '../../api/expenseRequests';
import {counterSelector} from '../../redux/store/financialSlice';
import {getCategories} from '../../api/requestAddCategory';
import {useNavigation} from '@react-navigation/native';

// main screen displaying all components
const Home = ({notifRef}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //get current date, month and year
  const newDate = new Date();
  const dateAdded = newDate.toLocaleDateString();
  const newMonth = newDate.getMonth();
  // get all tasks
  const posts = useSelector(state => counterSelector.getCounter(state.counter));
  // get all filtered tasks by month
  const filterDataTasks = useSelector(state =>
    counterSelector.getFilterTasks(state.counter),
  );
  //get the current balance
  const currentBalance = useSelector(state =>
    counterSelector.getCurrent(state.counter),
  );

  const [expenses, setExpenses] = useState('');
  const [expensesAmount, setExpensesAmount] = useState('');
  const [stateMonth, setStateMonth] = useState(newMonth);
  const [modalElem, setModalElem] = useState(false);
  const [selectItemUse, setSelectItemUse] = useState('');
  const [expenditure, setExpenditure] = useState(false);
  const [numPost, setSumPost] = useState(0);
  const [modalChangingTask, setModalChangingTask] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCurrentBalance());
    filteredPosts();
  }, []);

  // calling filtered tasks by month and year
  // the function accepts the date and navigation for the error
  const filteredPosts = () => {
    dispatch(getFilteredPosts(DATE_STATE, navigation));
  };
  // deleting the selected task
  // takes the selected task id and that task's data
  const deleteFunction = (id, task) => {
    dispatch(deletePost(id));
    setTimeout(() => {
      setCurrentBalance(!task.Transaction, task.Price);
    }, 1000);
  };
  // function of changing the current balance
  // accepts a transaction (Boolean value) and an expense amount
  const setCurrentBalance = (plus_minus, price) => {
    let number;
    if (plus_minus) {
      number = Number(currentBalance) - Number(price);
    } else {
      number = Number(currentBalance) + Number(price);
    }
    setTimeout(() => {
      dispatch(updateCurrentBalance(number));
    }, 1000);
  };
  // adding a new task
  const postToken = () => {
    setExpenses('');
    setExpensesAmount('');
    setModalElem(false);
    setSelectItemUse('');

    setTimeout(() => {
      setCurrentBalance(expenditure, expensesAmount);
    }, 1000);
    // checking if fields do not have empty values
    if (expenses && expensesAmount && selectItemUse) {
      dispatch(
        postTasks(
          expenses,
          expensesAmount,
          selectItemUse,
          expenditure,
          dateAdded,
          TASK_ID,
        ),
      );
      // call a function getFilteredPosts to display a new list of filtered tasks
      dispatch(getFilteredPosts(DATE_STATE));
      setSumPost(expensesAmount);
      notifRef.current.show(); // notification of the addition of a new expense
    }
  };

  const addTodo = () => {
    setModalElem(prev => !prev);
  };

  return (
    <>
      <View style={styles.container}>
        <TransactionCalendar
          post={posts}
          dateAdded={dateAdded}
          stateMonth={stateMonth}
          setStateMonth={setStateMonth}
        />
        <BalanceSheetForecast />
        <Chart />
        <View style={styles.flatList}>
          <ExpenseSheet
            filterDataTasks={filterDataTasks}
            post={posts}
            setModalElem={setModalElem}
            setModalChangingTask={setModalChangingTask}
            deleteFunction={deleteFunction}
          />
        </View>
      </View>
      <View>
        {modalElem || modalChangingTask ? (
          <ModalHome
            expenses={expenses}
            expensesAmount={expensesAmount}
            setExpenses={setExpenses}
            setSelectItemUse={setSelectItemUse}
            setExpenditure={setExpenditure}
            setExpensesAmount={setExpensesAmount}
            postToken={postToken}
            expenditure={expenditure}
            selectItemUse={selectItemUse}
            setModalChangingTask={setModalChangingTask}
            dateAdded={dateAdded}
            modalElem={modalElem}
          />
        ) : (
          ''
        )}
        <NavigationBar
          addTodo={addTodo}
          modalElem={modalElem}
          modalChangingTask={modalChangingTask}
        />
      </View>
    </>
  );
};

export default Home;
