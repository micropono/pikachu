import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './src/navigator';
import store from './src/store';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
