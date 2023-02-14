import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  profile: {
    flex: 1,
    backgroundColor: '#2A3C44',
  },
  accountName: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginVertical: 50,
    borderColor: '#B8C2C0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#30444E',
  },
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  dateSwitch: {
    backgroundColor: '#30444E',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 100,
    paddingHorizontal: 30,
  },
  dataTimeDisplay: {
    backgroundColor: '#2A3C44',
    marginHorizontal: 30,
    textAlign: 'center',
    marginVertical: 20,
    paddingVertical: 20,
    borderRadius: 15,
  },
  balanceMonth: {
    backgroundColor: '#30444E',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  displayName: {
    paddingHorizontal: 20,
    fontSize: 18,
  },
  accountDetails: {
    top: 15,
  },
  nextSvgAccount: {
    paddingLeft: 40,
  },
  switchReminder: {
    fontSize: 24,
    color: 'white',
  },
  switchRemains: {
    width: 200,
    fontSize: 24,
    color: 'white',
  },
  containerTime: {
    backgroundColor: '#30444E',
    paddingVertical: 10,
    borderColor: '#B8C2C0',
    borderTopWidth: 1,
    marginBottom: 10,
  },
  modalSynchronization: {
    backgroundColor: '#286053',
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 25,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  synchronizationText: {},
  textSync: {
    marginHorizontal: 15,
  },
  textChoosingCategory: {
    textAlign: 'center',
  },
  containerCategory: {
    backgroundColor: '#475E69',
    marginHorizontal: 10,
    marginVertical: 15,
    paddingVertical: 20,
    borderRadius: 25,
  },
  backSvg: {
    backgroundColor: '#3DD598',
    width: 40,
    borderRadius: 10,
  },
  backSvgIcon: {
    alignItems: 'center',
  },
});
