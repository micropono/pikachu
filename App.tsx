import React from 'react';
import {Provider} from 'react-redux';
import {Link, NativeRouter} from 'react-router-native';
import {SafeAreaView, StatusBar, Text} from 'react-native';

import Router from './src/router';
import store from './src/store';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NativeRouter>
        <SafeAreaView>
          <Link to="/auth" underlayColor="#f0f4f7">
            <Text>About</Text>
          </Link>
          <Router />
        </SafeAreaView>
      </NativeRouter>
    </Provider>
  );
};

export default App;
