import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import RootStack from './src/components/rootStack';

const store = configureStore();

const App = () => (
  <Provider store={store} >
    <RootStack />
  </Provider >
);

export default App;
