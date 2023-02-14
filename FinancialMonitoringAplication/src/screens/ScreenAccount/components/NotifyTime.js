import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styleAccount';
import svg from 'assets/svg/index';
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// adding notifications at the appointed time
// accepts data to work with notification
const NotifyTime = ({ onCreateTriggerNotification }) => {
  const [time, setTime] = useState(new Date());
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setDatePickerVisibility(false);
  };

  const createNotifyTime = date => {
    // we record the data that we receive
    onCreateTriggerNotification(date);
  };

  const handleConfirm = handleTime => {
    // what time was chosen for
    setTime(handleTime);
    onCreateTriggerNotification(handleTime);
    hideTimePicker();
  };

  return (
    <View style={styles.switchContainer}>
      <View style={styles.dateSwitch}>
        <svg.Notify width={30} height={20} fill={'#3DD598'} />
        <Text style={styles.switchReminder}>Напоминать ежедневно</Text>
        <Switch
          thumbColor={isEnabled ? '#40DF9F' : 'white'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.containerTime}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.dataTimeDisplay}>{time.toLocaleString()}</Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
        onChange={newDate => createNotifyTime(newDate)}
      />
    </View>
  );
};

export default NotifyTime;
