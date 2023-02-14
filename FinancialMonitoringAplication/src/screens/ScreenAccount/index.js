import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles/styleAccount';
import NavigationBar from '../../navigation/NavigationBar';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import notifee, {TriggerType, TimeUnit} from '@notifee/react-native';
import Synchronization from './components/Synchronization';
import NotifyTime from './components/NotifyTime';
import BalanceEndTheMonth from './components/BalanceEndTheMonth';
import AccountDetails from './components/AccountDetails';

// main screen of functionality and user data
// accepts navigation to move to another screen
const Account = ({navigation}) => {
  const loadSceneCategory = () => {
    navigation.navigate('Categories');
  };

  const onCreateTriggerNotification = async data => {
    const date = new Date(Date.now());
    date.setHours(data.getHours()); //pass minutes and hours from date
    date.setMinutes(data.getMinutes());

    // create a time-based trigger
    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
      alarmManager: true,
      interval: 30,
      timeUnit: TimeUnit.MINUTES,
    };

    // notification data
    await notifee.createChannel({
      id: 'alarm',
      name: 'Firing alarms & timers',
      lights: false,
      vibration: true,
    });

    // create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 11:20am',
        android: {
          channelId: 'alarm',
        },
      },
      trigger,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ScrollView>
          <AccountDetails navigation={navigation} />
          <NotifyTime
            onCreateTriggerNotification={onCreateTriggerNotification}
          />
          <BalanceEndTheMonth />
          <View style={styles.containerCategory}>
            <TouchableOpacity onPress={loadSceneCategory}>
              <Text style={styles.textChoosingCategory}>Выбрать категории</Text>
            </TouchableOpacity>
          </View>
          <Synchronization />
        </ScrollView>
      </View>
      <NavigationBar />
    </View>
  );
};

export default Account;
