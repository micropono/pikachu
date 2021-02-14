import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';

import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from '../screens/auth';

const Stack = createStackNavigator();

const Navigator = () => {
  const isAuth = false;

  if (!isAuth) {
    return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{header: () => null}}
          component={WelcomeScreen}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
