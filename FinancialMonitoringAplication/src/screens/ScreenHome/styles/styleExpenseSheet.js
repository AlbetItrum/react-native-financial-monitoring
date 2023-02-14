import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 55,
  },
  containerTextItem: {
    flexDirection: 'row',
    marginHorizontal: 25,
    backgroundColor: '#30444E',
    marginTop: 15,
    padding: 10,
    borderRadius: 15,
    width: '88%',
  },
  checkIcon: {
    marginHorizontal: 5,
  },
  itemText: {
    flexDirection: 'row',
    width: 200,
  },
  blockPriceCategory: {
    width: 80,
  },
  itemTextName: {
    width: 70,
    marginRight: 15,
    backgroundColor: '#283941',
    borderRadius: 10,
    textAlign: 'center',
    padding: 5,
  },
  itemTextPriceRed: {
    marginBottom: 5,
    color: 'red',
  },
  itemTextPriceGreen: {
    marginBottom: 5,
    color: 'green',
  },
  itemTextData: {
    fontSize: 12,
  },
  itemTextCategory: {
    marginRight: 5,
    textDecorationLine: 'underline',
  },
  buttonStateChange: {
    flexDirection: 'row',
  },
  deleteTask: {},
  changeTask: {},
});
