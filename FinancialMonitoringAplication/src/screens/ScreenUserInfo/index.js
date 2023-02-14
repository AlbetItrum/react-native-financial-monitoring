import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {styles} from './styles/styleFullInfo';
import {useNavigation} from '@react-navigation/native';

// new user login screen using his google data
const FullInfo = () => {
  const navigation = useNavigation();
  // screen jump function 'Home'
  const loadScene = () => {
    navigation.navigate('Home');
  };
  // screen jump function 'ErrorMessage'
  const loadError = () => {
    navigation.navigate('ErrorMessage');
  };

  useEffect(() => {
    //when logging in, it immediately goes to the tab 'Home'
    const googleSignin = async () => {
      await GoogleSignin.signIn();
      navigation.navigate('Home');
    };
    googleSignin();
  }, []);
  // new client id credentials for web application
  GoogleSignin.configure({
    webClientId:
      '781707529139-5oqkqfpaucb11jhitbjdgdsiirj0rodn.apps.googleusercontent.com',
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive.readonly',
    ],
  });
  // authorization and obtaining user data when clicking on a button
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const res = await auth().signInWithCredential(googleCredential);
    if (res.additionalUserInfo) {
      loadScene();
      console.log(res, 'you are logged in to your account');
    } else {
      loadError();
      console.log('Error');
    }
    return res;
  }

  return (
    <View style={styles.contentInfo}>
      <Pressable
        onPress={
          () =>
            onGoogleButtonPress()
              .then(res => console.log(res, 'THEN'))
              .catch(error => console.log(error)) //
        }>
        <Text style={styles.sectionEnter}>Вход</Text>
        <Text style={styles.sectionContainer}>
          Войти с помощью Google аккаунта
        </Text>
      </Pressable>
    </View>
  );
};

export default FullInfo;
