import React, {useCallback, useState} from 'react';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {counterSelector} from '../../../redux/store/financialSlice';
import {getCurrentBalance} from '../../../api/balanceRequests';
import {styles} from '../styles/styleBalanceSheetForecast';

// current balance component
const BalanceSheetForecast = () => {
  const [endMonthBalance, setEndMonthBalance] = useState(null);
  const dispatch = useDispatch();
  // getting the current balance
  const currentBalance = useSelector(state =>
    counterSelector.getCurrent(state.counter),
  );
  // getting filtered tasks
  const selectFilter = useSelector(state =>
    counterSelector.getFilterTasks(state.counter),
  );
  // balance change function (expense or income) when adding a new task
  const balanceMonth = useCallback(() => {
    let lastMonthBalance = Number(0);
    for (let index = 0; index < selectFilter.length; index++) {
      const element = selectFilter[index];
      if (element.Transaction === true) {
        lastMonthBalance = lastMonthBalance + Number(element.Price);
      } else {
        lastMonthBalance = lastMonthBalance - Number(element.Price);
      }
    }
    setEndMonthBalance(lastMonthBalance);
  }, [selectFilter]);

  useEffect(() => {
    balanceMonth();
    dispatch(getCurrentBalance());
  }, [currentBalance, balanceMonth]);

  return (
    <View>
      <View style={styles.currentBalance}>
        <Text style={styles.currentBalanceText}>
          Текущий баланс:
          <Text
            style={currentBalance >= 0 ? styles.colorGreen : styles.colorRed}>
            {currentBalance}
          </Text>
        </Text>
      </View>
      <View style={styles.currentBalanceSheetForecast}>
        <Text style={styles.balanceSheetForecastText}>
          Прогноз баланса на конец месяца
        </Text>
        <Text style={styles.balanceSheetForecastNumber}>{endMonthBalance}</Text>
      </View>
    </View>
  );
};

export default BalanceSheetForecast;
