import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../styles/styleHome';
import svg from 'assets/svg/index';
import {useDispatch} from 'react-redux';
import {CALENDAR} from '../../../constants/indexConstants';
import {changeCalendar} from '../../../utils/calendarChange';

// selected expense date component
const TransactionCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [clickCalendar, setClickCalendar] = useState(false);
  const dispatch = useDispatch();

  const currentMonth = CALENDAR[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();
  const transitionNextMonth = currentDate.getMonth() - 1;
  const switchingLastMonth = currentDate.getMonth() + 1;
  const transitionNextYear = currentDate.getMonth() - 11;
  const switchingLastYear = currentDate.getMonth() + 11;

  const pressMonth = () => {
    setClickCalendar(prev => !prev);
  };

  return (
    <View>
      <View style={styles.calendar}>
        <TouchableOpacity
          onPress={() => {
            clickCalendar
              ? dispatch(
                  changeCalendar(
                    currentDate,
                    setCurrentDate,
                    transitionNextYear,
                  ),
                )
              : dispatch(
                  changeCalendar(
                    currentDate,
                    setCurrentDate,
                    transitionNextMonth,
                  ),
                );
          }}>
          <svg.Back width={30} height={30} fill={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressMonth()}>
          {!clickCalendar ? (
            <Text style={styles.calendarText}>{currentMonth}</Text>
          ) : (
            <Text style={styles.calendarText}>{currentYear}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            clickCalendar
              ? dispatch(
                  changeCalendar(
                    currentDate,
                    setCurrentDate,
                    switchingLastYear,
                  ),
                )
              : dispatch(
                  changeCalendar(
                    currentDate,
                    setCurrentDate,
                    switchingLastMonth,
                  ),
                );
          }}>
          <svg.Next width={30} height={30} fill={'#fff'} />
        </TouchableOpacity>
      </View>
      {clickCalendar && (
        <View style={styles.calendarList}>
          <FlatList
            data={CALENDAR}
            numColumns={3}
            renderItem={({item, i}) => (
              <TouchableOpacity>
                <Text style={styles.textMonth}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default TransactionCalendar;
