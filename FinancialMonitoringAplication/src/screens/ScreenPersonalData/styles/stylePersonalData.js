import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerPersonalData: {
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#2A3C44',
  },
  navigationBar: {
    justifyContent: 'flex-end',
  },
  sectionContainer: {
    width: 300,
    fontSize: 18,
    paddingVertical: 25,
    borderRadius: 15,
    textAlign: 'center',
    backgroundColor: '#40DF9F',
    color: 'black',
  },
  buttonOutGoogle: {
    alignItems: 'center',
    backgroundColor: '#30444E',
    paddingVertical: 25,
    marginTop: 1,
  },
  personal: {
    alignItems: 'center',
    backgroundColor: '#30444E',
    paddingBottom: 50,
    borderColor: '#B8C2C0',
    borderBottomWidth: 1,
  },
  personalImg: {
    width: 150,
    height: 150,
  },
  accountData: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    backgroundColor: '#30444E',
  },
  personalName: {
    fontSize: 24,
    color: 'white',
  },
  personalNameUser: {
    backgroundColor: '#2A3C44',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  personalNameEmail: {
    backgroundColor: '#475E69',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  backSvg: {
    backgroundColor: '#30444E',
    borderColor: '#B8C2C0',
    borderTopWidth: 1,
    paddingTop: 15,
  },
  returnBack: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  returnBackText: {
    top: 10,
  },
});
