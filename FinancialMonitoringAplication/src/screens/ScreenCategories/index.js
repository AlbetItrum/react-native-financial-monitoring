import React, {useEffect, useState} from 'react';
import NavigationBar from '../../navigation/NavigationBar';
import {styles} from './styles/stylePersonalCategories';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {counterSelector} from '../../redux/store/financialSlice';
import svg from 'assets/svg/index';
import {
  addListCategories,
  deleteCategories,
  getCategories,
} from '../../api/requestAddCategory';
import ModalAddCategory from './components/ModalAddCategory';

// screen component with categories
const Categories = () => {
  // popup modal on click
  const [modalAddCategory, setModalAddCategory] = useState(false);
  // received text
  const [typeCategory, setTypeCategory] = useState('');
  // getting all added categories
  const categoryPost = useSelector(state =>
    counterSelector.getCounter(state.counter),
  );
  const dispatch = useDispatch();
  // function adding categories to addCategory
  const addCategory = () => {
    setModalAddCategory(prev => !prev);
    getCategory();
  };

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    dispatch(getCategories());
  };

  const deleteFunction = id => {
    dispatch(deleteCategories(id));
  };
  // function to add categories and hide modal window
  const addCategories = () => {
    setModalAddCategory(prev => !prev);
    setTypeCategory('');
    dispatch(addListCategories(typeCategory));
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        {item.map((e, i) => {
          const KEY = Math.random() + 'Item';
          return (
            <View style={styles.categoriesItem} key={'View_' + KEY}>
              <Text style={styles.categoriesItemText}>{e}</Text>
              <View>
                <TouchableOpacity onPress={() => deleteFunction(index + 2)}>
                  <svg.Delete width={40} height={40} fill={'#fff'} />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View style={styles.containerCategory}>
      <View style={styles.container}>
        <FlatList
          data={categoryPost}
          renderItem={renderItem}
          ListHeaderComponent={() => (
            <View style={styles.categoryTransaction}>
              <Text style={styles.categoryTransactionName}>
                Категории транзакции:
              </Text>
            </View>
          )}
        />
      </View>

      {modalAddCategory && (
        <ModalAddCategory
          setTypeCategory={setTypeCategory}
          typeCategory={typeCategory}
          addCategories={addCategories}
        />
      )}

      <NavigationBar addTodo={addCategory} />
    </View>
  );
};

export default Categories;
