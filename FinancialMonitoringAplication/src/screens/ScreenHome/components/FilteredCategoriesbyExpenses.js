import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styleFilteredCategoriesbyExpenses';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {counterSelector} from '../../../redux/store/financialSlice';
import {useNavigation} from '@react-navigation/native';
import svg from 'assets/svg/index';
import {getFilterCategory} from '../../../api/requestsFilterCategory';

// Transition block to the screen of filtered categories
const FilteredCategoriesbyExpenses = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // filtered tasks by category
  const filterCategoryTasks = useSelector(state =>
    counterSelector.getCategoriesTask(state.counter),
  );
  // go to main screen
  const loadSceneHome = () => {
    navigation.navigate('Home');
  };
  // data request
  const getCategory = () => {
    dispatch(getFilterCategory());
  };
  // function of drawing filtered tasks
  const renderItemCategory = filterCategoryTasks.map((item, index) => {
    const itemTransaction = item.Transaction;
    const KEY = Math.random() + 'Item';
    return (
      <View key={KEY} style={styles.containerItem}>
        <View style={styles.checkIcon}>
          {itemTransaction ? (
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
                itemTransaction
                  ? styles.itemTextPriceGreen
                  : styles.itemTextPriceRed
              }>
              {item.Price}р.
            </Text>
            <Text style={styles.itemTextCategory}>{item.Category}</Text>
          </View>
          <Text style={styles.itemTextData}>{item.Date}</Text>
        </View>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imgBack}>
          <TouchableOpacity onPress={loadSceneHome}>
            <svg.Back width={35} height={35} fill={'#fff'} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TouchableOpacity onPress={getCategory} />
          <View style={styles.renderItem}>{renderItemCategory}</View>
        </ScrollView>
      </View>
    </View>
  );
};

export default FilteredCategoriesbyExpenses;
