/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  useColorScheme,
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/store/index';
import Navigator from './src/navigators';
import SplashScreen from './src/screens/SplashScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 1000);
  }, [])

  if (showSplashScreen) {
    return <SplashScreen />;
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
