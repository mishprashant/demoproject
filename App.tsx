/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import MainRoute from "./src/route";
import store from "./src/store";
import { Provider, } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider>

  );
};


export default App;
