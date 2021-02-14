import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import Navigator from './src/navigator';
import store from './src/store';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
