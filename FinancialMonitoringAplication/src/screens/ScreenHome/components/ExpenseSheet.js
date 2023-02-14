import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {styles} from '../styles/styleExpenseSheet';
import svg from '../../../../assets/svg';
import {useDispatch} from 'react-redux';
import {
  stateChangingTask,
  setChangeIdExpenses,
} from '../../../redux/store/financialSlice';
import {useNavigation} from '@react-navigation/native';
import {getFilterCategory} from '../../../api/requestsFilterCategory';

// Component for displaying all filtered expenses
// Accepts: filterDataTasks: filtered array of expenses, deleteFunction: function of deleting the selected task, setModalChangingTask:display modal window
const ExpenseSheet = ({
  filterDataTasks,
  deleteFunction,
  setModalChangingTask,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Switch to the screen of filtered tasks by categories from the selected expense
  const loadSceneFilteredCategories = item => {
    // Go to the screen with filtered tasks by the selected category
    dispatch(getFilterCategory(item.Category));
    navigation.navigate('FilteredCategoriesbyExpenses');
  };

  // Function to change the selected task
  // Accepts a unique id and task data
  const changeExpensess = (id, item) => {
    dispatch(setChangeIdExpenses(id));
    const obj = {
      name: item.Name,
      price: item.Price,
      category: item.Category,
      transaction: item.Transaction,
      date: item.Date,
    };
    dispatch(stateChangingTask(obj)); //saving the data of the pressed task
    setModalChangingTask(prev => !prev);
  };

  const renderItem = ({item, index}) => {
    const isCheckIcon = item.Transaction;
    return (
      <View style={styles.containerTextItem}>
        <View style={styles.checkIcon}>
          {isCheckIcon ? (
            <View>
              <svg.UpCircle width={50} height={50} />
            </View>
          ) : (
            <View>
              <svg.DownCircle width={50} height={50} />
            </View>
          )}
        </View>

        <View style={styles.itemText}>
          <Text style={styles.itemTextName}>{item.Name}</Text>

          <View style={styles.blockPriceCategory}>
            <Text
              style={
                isCheckIcon
                  ? styles.itemTextPriceGreen
                  : styles.itemTextPriceRed
              }>
              {item.Price}р.
            </Text>
            <TouchableOpacity onPress={() => loadSceneFilteredCategories(item)}>
              <Text style={styles.itemTextCategory}>{item.Category}</Text>
              <svg.Next width={20} height={20} fill={'#fff'} />
            </TouchableOpacity>
          </View>

          <Text style={styles.itemTextData}>{item.Date}</Text>
        </View>

        <View style={styles.buttonStateChange}>
          <View style={styles.changeTask}>
            <TouchableOpacity onPress={() => changeExpensess(index + 2, item)}>
              <svg.Edit width={40} height={40} fill={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={styles.deleteTask}>
            <TouchableOpacity onPress={() => deleteFunction(item.ID, item)}>
              <svg.Delete width={40} height={40} fill={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={filterDataTasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default ExpenseSheet;
