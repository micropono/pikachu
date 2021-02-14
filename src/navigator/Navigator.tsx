import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from '../screens/auth';

const Stack = createStackNavigator();
const { Navigator: StackNavigator, Screen } = Stack;

const Navigator = () => {
  const isAuth = false;

  if (!isAuth) {
    return (
      <StackNavigator initialRouteName="Welcome">
        <Screen
          name="Welcome"
          options={{ header: () => null }}
          component={WelcomeScreen}
        />
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Register" component={RegisterScreen} />
        <Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </StackNavigator>
    );
  }

  return (
    <StackNavigator initialRouteName="Auth">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Profile" component={ProfileScreen} />
    </StackNavigator>
  );
};

export default Navigator;
