import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from '../screens/auth';

import { theme } from '../config/theme';

const Stack = createStackNavigator();
const { Navigator: StackNavigator, Screen } = Stack;

const Navigator = () => {
  const isAuth = false;

  let content = (
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

  if (isAuth) {
    content = (
      <StackNavigator initialRouteName="Auth">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Profile" component={ProfileScreen} />
      </StackNavigator>
    );
  }

  return <NavigationContainer theme={theme}>{content}</NavigationContainer>;
};

export default Navigator;
