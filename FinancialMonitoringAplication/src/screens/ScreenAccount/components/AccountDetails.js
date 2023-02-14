import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styleAccount';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import svg from 'assets/svg/index';

// User's personal information component
// Accepts navigation to move to another screen
const AccountDetails = ({ navigation }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const loadSceneProfile = () => {
    navigation.navigate('PersonalData');
  };

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

  if (!user || user === null || user === undefined) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={loadSceneProfile}>
      <View style={styles.accountName}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: user.photoURL,
          }}
        />
        <View style={styles.accountDetails}>
          <Text style={styles.displayName}>{user.displayName}</Text>
          <Text style={styles.displayName}>{user.email}</Text>
        </View>
        <View style={styles.nextSvgAccount}>
          <svg.Next width={20} height={70} fill={'#fff'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AccountDetails;
