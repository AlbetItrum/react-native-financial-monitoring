import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../../ScreenCategories/styles/stylePersonalCategories';

// modal window for adding categories
// accepts setTypeCategory, typeCategory: word processing, addCategories: function to add a new category
const ModalAddCategory = ({setTypeCategory, typeCategory, addCategories}) => {
  return (
    <View style={styles.modalCategory}>
      <View style={styles.boxModalCategory}>
        <Text style={styles.textModal}>Добавление категорий</Text>
        <View style={styles.containerInputCategory}>
          <TextInput
            style={styles.textInputCategory}
            onChangeText={category => setTypeCategory(category)}
            placeholder={'Введите название категории:'}
            value={typeCategory}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => addCategories()}>
            <View style={styles.buttonAddCategory}>
              <Text style={styles.textButtonCategory}>Добавить</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModalAddCategory;
