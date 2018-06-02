import React from 'react';
import { View } from 'react-native';
// import { RootStack } from './src/components/rootStack';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Accueil from './src/components/accueil';

const store = configureStore();

const App = () => (
  // <RootStack />
  <Provider store={store} >
    <View>
      <Accueil />
    </View>
  </Provider >
);

export default App;
