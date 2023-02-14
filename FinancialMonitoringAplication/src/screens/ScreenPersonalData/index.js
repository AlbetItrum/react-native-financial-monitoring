import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles/stylePersonalData';
import NavigationBar from '../../navigation/NavigationBar';
import auth from '@react-native-firebase/auth';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import svg from 'assets/svg/index';

// screen for entering personal data of an authorized user
const PersonalData = ({navigation}) => {
  // screen jump function 'Account'
  const loadSceneHome = () => {
    navigation.navigate('Account');
  };

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(initializingUser) {
    setUser(initializingUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  // logout function and reset user data
  const outGoogle = async () => {
    await GoogleSignin.signOut();
    navigation.navigate('FullUserInfo');
  };

  return (
    <View style={styles.containerPersonalData}>
      <View style={styles.container}>
        <View style={styles.backSvg}>
          <View style={styles.touchBackSvg}>
            <TouchableOpacity onPress={loadSceneHome}>
              <View style={styles.returnBack}>
                <svg.Back width={35} height={35} fill={'#fff'} />
                <Text style={styles.returnBackText}>Назад</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.personal}>
            <Image
              style={styles.personalImg}
              source={{
                uri: user.photoURL,
              }}
            />
          </View>
          <View style={styles.accountData}>
            <Text style={styles.personalName}>Ваше имя</Text>
            <Text style={styles.personalNameUser}>{user.displayName}</Text>
            <Text style={styles.personalName}>Ваше email</Text>
            <Text style={styles.personalNameEmail}>{user.email}</Text>
          </View>
          <View style={styles.buttonOutGoogle}>
            <TouchableOpacity onPress={outGoogle}>
              <Text style={styles.sectionContainer}>
                Выйти из Google аккаунта
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.navigationBar}>
        <NavigationBar />
      </View>
    </View>
  );
};

export default PersonalData;
