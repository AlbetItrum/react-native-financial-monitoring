import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerCategory: {
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#2A3C44',
  },
  modalCategory: {
    backgroundColor: '#2A3C44',
  },
  boxModalCategory: {
    marginHorizontal: 25,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 55,
    backgroundColor: '#475E69',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonAddCategory: {
    width: 180,
    height: 50,
    backgroundColor: '#3DD598',
    justifyContent: 'center',
    borderRadius: 15,
  },
  textButtonCategory: {
    textAlign: 'center',
  },
  textModal: {
    textAlign: 'center',
  },
  categoriesItemText: {
    width: 100,
    textAlign: 'center',
  },
  categoriesItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#475E69',
    marginHorizontal: 35,
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 25,
  },
  categoryTransaction: {
    backgroundColor: '#475E69',
    margin: 15,
    padding: 20,
    borderRadius: 10,
  },
  categoryTransactionName: {
    textAlign: 'center',
    fontSize: 22,
  },
});
