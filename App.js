/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState, createContext} from 'react';
import {Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Route from './src/routes';
const App = () => {
  RNBootSplash.hide({fade: true, duration: 10});
  return <Route />;
};
export default App;
