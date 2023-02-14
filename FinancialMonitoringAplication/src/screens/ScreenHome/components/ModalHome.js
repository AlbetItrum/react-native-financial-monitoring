import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import svg from 'assets/svg/index';
import SelectDropdown from 'react-native-select-dropdown';
import {styles} from '../styles/styleHome';
import {useDispatch, useSelector} from 'react-redux';
import {counterSelector} from '../../../redux/store/financialSlice';
import {changePosts} from 'test/api/expenseRequests';

{
  /*modal window component for switching to other screens and adding tasks
expenses: cost name
expensesAmount: amount of a certain cost
setExpenses: saving costs
setSelectItemUse: getting cost categories
setExpenditure: change transaction state on click
postToken: function to add tasks
setExpensesAmount: adding amount
expenditure: the resulting cost name
selectItemUse: selected category when adding expenses
setModalChangingTask: changing the display of the modal window
dateAdded: date the task was added
modalElem: choice of adding a new task or editing*/
}
const ModalHome = ({
  expenses,
  expensesAmount,
  setExpenses,
  setSelectItemUse,
  setExpenditure,
  postToken,
  setExpensesAmount,
  expenditure,
  selectItemUse,
  setModalChangingTask,
  dateAdded,
  modalElem,
}) => {
  const post = useSelector(state => counterSelector.getCounter(state.counter));
  // getting data to change a specific task
  const changeRedux = useSelector(state =>
    counterSelector.getChangeTasks(state.counter),
  );
  // getting the id of the selected task
  const id = useSelector(state => counterSelector.getIdChange(state.counter));
  const dispatch = useDispatch();

  const [inputNameValue, setInputNameValue] = useState(changeRedux.name);
  const [inputPriceValue, setInputPriceValue] = useState(changeRedux.price);
  // a function that passes data to change the task
  const functionChangingTask = () => {
    dispatch(
      changePosts(
        id,
        expenditure,
        inputNameValue,
        selectItemUse,
        inputPriceValue,
        dateAdded,
      ),
    );
    setInputNameValue('');
    setInputPriceValue('');
    setModalChangingTask(false);
  };
  // function to add or change a task
  const saveChanges = () => {
    if (modalElem) {
      postToken();
    } else {
      functionChangingTask();
    }
  };

  return (
    <View>
      <View style={styles.containerTransaction}>
        <View style={styles.transaction}>
          <TouchableOpacity onPress={() => setExpenditure(true)}>
            <View style={styles.transactionUp}>
              <svg.UpCircle width={50} height={50} />
              <Text
                style={expenditure ? styles.choosingUp : styles.choosingDown}>
                Приход
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setExpenditure(false)}>
            <View style={styles.transactionDown}>
              <svg.DownCircle width={50} height={50} />
              <Text
                style={expenditure ? styles.choosingDown : styles.choosingUp}>
                Расход
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.dropDown}>
          <SelectDropdown //function for calling categories
            data={post}
            onSelect={(selectedItem, index) => {
              setSelectItemUse(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>

        <View style={styles.transactionInputText}>
          <TextInput
            style={styles.inputExpenses}
            onChangeText={e => setExpenses(e)}
            placeholder={'Название'}
            value={modalElem ? expenses : inputNameValue}
          />
          <TextInput
            style={styles.inputExpensesAmount}
            onChangeText={e => setExpensesAmount(e)}
            keyboardType="numeric"
            placeholder={'Сумма'}
            value={modalElem ? expensesAmount : inputPriceValue}
          />
        </View>
        <View style={styles.transactionButtonSave}>
          <TouchableOpacity onPress={() => saveChanges()}>
            <View style={styles.expensesButtonSave}>
              <Text style={styles.textExpenses}>Сохранить</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModalHome;
