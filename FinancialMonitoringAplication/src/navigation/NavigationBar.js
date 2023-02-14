import React from 'react';
import {View} from 'react-native';
import {styles} from './styles/styleNavigationBar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import svg from 'assets/svg/index';

// App-wide navigation bar
// Accepts addTodo: all added expenses, modalElem: modal window activity on added task, modalChangingTask: modal window activity when task is changed
const NavigationBar = ({addTodo, modalElem, modalChangingTask}) => {
  const navigation = useNavigation();
  // Screen jump function 'Home'
  const loadSceneHome = () => {
    navigation.navigate('Home');
  };
  // Screen jump function 'Account'
  const loadSceneAccount = () => {
    navigation.navigate('Account');
  };

  const changinIcon = () => {
    addTodo();
  };

  return (
    <View>
      <View style={styles.background}>
        <View style={styles.container}>
          <TouchableOpacity onPress={loadSceneHome}>
            <svg.Home width={35} height={35} fill={'#fff'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => changinIcon()}>
            {modalElem || modalChangingTask ? (
              <svg.Cancel width={65} height={65} />
            ) : (
              <svg.Add width={65} height={65} />
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={loadSceneAccount}>
            <svg.Account width={35} height={35} fill={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NavigationBar;
