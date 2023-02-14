import React from 'react';
import FullUserInfo from '../screens/ScreenUserInfo';
import PersonalData from '../screens/ScreenPersonalData';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ErrorMessage from '../screens/ScreenError';
import Home from '../screens/ScreenHome';
import Account from '../screens/ScreenAccount';
import Categories from '../screens/ScreenCategories';
import FilteredCategoriesbyExpenses from '../screens/ScreenHome/components/FilteredCategoriesbyExpenses';

const Stack = createStackNavigator();
// Function of transitions between screens
// Accepts notification {notifRef}
const Navigate = ({notifRef}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* window scan for user authorization */}
        <Stack.Screen
          name="FullUserInfo"
          component={FullUserInfo}
          options={{title: 'Feed2!'}}
        />
        {/* user personal data screen */}
        <Stack.Screen
          name="PersonalData"
          component={PersonalData}
          options={{title: 'PersonalData!'}}
        />
        {/* user function screen */}
        <Stack.Screen
          name="Account"
          component={Account}
          options={{title: 'Account!'}}
        />
        {/* added categories screen */}
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{title: 'Categories!'}}
        />
        {/* screen of filtered tasks by category */}
        <Stack.Screen
          name="FilteredCategoriesbyExpenses"
          component={FilteredCategoriesbyExpenses}
          options={{title: 'FilteredCategoriesbyExpenses!'}}
        />
        {/* main screen */}
        <Stack.Screen name="Home" options={{title: 'Home!'}}>
          {props => <Home notifRef={notifRef} {...props} />}
        </Stack.Screen>
        {/* error output screen */}
        <Stack.Screen
          name="ErrorMessage"
          component={ErrorMessage}
          options={{title: 'ErrorMessage!'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
