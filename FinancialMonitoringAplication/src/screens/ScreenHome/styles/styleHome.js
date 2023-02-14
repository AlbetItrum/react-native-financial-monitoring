import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3C44',
  },
  flatList: {
    paddingTop: 10,
    paddingBottom: 250,
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 15,
  },
  choosingUp: {
    color: 'white',
    textAlign: 'center',
  },
  choosingDown: {
    color: 'black',
    textAlign: 'center',
  },
  calendarList: {
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#959595',
  },
  textMonth: {
    padding: 15,
    color: 'white',
    marginHorizontal: 10,
  },
  calendarText: {
    width: 100,
    marginHorizontal: 80,
    textAlign: 'center',
    fontSize: 24,
  },
  containerTransaction: {
    backgroundColor: '#30444E',
  },
  inputExpenses: {
    height: 40,
    marginHorizontal: 15,
    borderWidth: 1,
    padding: 10,
  },
  inputExpensesAmount: {
    height: 40,
    marginHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
  dropDown: {
    alignItems: 'center',
    marginVertical: 10,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  transactionUp: {},
  transactionDown: {
    marginLeft: 100,
  },
  transactionButtonSave: {
    alignItems: 'center',
  },
  expensesButtonSave: {
    width: 180,
    height: 50,
    backgroundColor: '#3DD598',
    justifyContent: 'center',
    borderRadius: 15,
  },
  textExpenses: {
    textAlign: 'center',
    fontSize: 18,
  },
});
