import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles/styleError';

// Error screen
const ErrorMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textError}>Упс... Что то сломалось </Text>
    </View>
  );
};

export default ErrorMessage;
