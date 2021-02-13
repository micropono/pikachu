import React from 'react';

import {Route} from 'react-router-native';

import HomeScreen from '../screens/home';
import AuthScreen from '../screens/auth';

const Rotuer = () => {
  return (
    <>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/auth" component={AuthScreen} />
    </>
  );
};

export default Rotuer;
