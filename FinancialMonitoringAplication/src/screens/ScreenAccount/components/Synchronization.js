import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styleAccount';
import svg from 'assets/svg/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DATE_STATE, SYNC_TIME_IS_NOW } from '../../../constants/indexConstants';
import { getFilteredPosts } from '../../../api/expenseRequests';
import { useDispatch } from 'react-redux';

// function of data synchronization with Google spreadsheets and applications
const Synchronization = () => {
  const [dateSync, setDateSync] = useState('');

  const dispatch = useDispatch();

  // query all data
  const syncButton = async () => {
    setDateSync(SYNC_TIME_IS_NOW);
    dispatch(getFilteredPosts(DATE_STATE));
  };

  return (
    <View style={styles.modalSynchronization}>
      <View style={styles.backSvg}>
        <View style={styles.backSvgIcon}>
          <svg.SyncIcon width={30} height={40} />
        </View>
      </View>
      <View style={styles.textSync}>
        <Text style={styles.synchronizationText}>Синхронизация</Text>
        <Text style={styles.lastSync}>Последняя синхронизация: {dateSync}</Text>
      </View>
      <TouchableOpacity onPress={syncButton}>
        <svg.Play width={30} height={40} fill={'#3DD598'} />
      </TouchableOpacity>
    </View>
  );
};

export default Synchronization;
