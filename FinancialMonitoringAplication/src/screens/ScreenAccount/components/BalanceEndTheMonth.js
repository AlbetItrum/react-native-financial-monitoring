import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { styles } from '../styles/styleAccount';
import svg from 'assets/svg/index';
import { clickSwitchRemains } from '../../../redux/store/financialSlice';
import { useDispatch } from 'react-redux';

// Call display on the main screen of the calculation of the balance at the end of the month
const BalanceEndTheMonth = () => {
  const [isEnabledBalance, setIsEnabledBalance] = useState(false);

  const dispatch = useDispatch();

  const toggleSwitchBalance = () => {
    setIsEnabledBalance(previousState => !previousState);
  };
  // Checking switch status
  dispatch(clickSwitchRemains(isEnabledBalance));

  return (
    <View style={styles.balanceMonth}>
      <svg.Star width={30} height={40} fill={'#3DD598'} />
      <Text style={styles.switchRemains}>
        Расчитывать остаток на конец месяца
      </Text>
      <Switch
        thumbColor={isEnabledBalance ? '#40DF9F' : 'white'}
        onValueChange={toggleSwitchBalance}
        value={isEnabledBalance}
      />
    </View>
  );
};

export default BalanceEndTheMonth;
