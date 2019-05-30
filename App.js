import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './src/screens/MainScreen/Main'
import WebViewScreen from './src/screens/WebViewScreen/WeView';

const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  WebViewScreen: {
    screen: WebViewScreen,
    navigationOptions: {
      header: null
    }
  },
    initialRouteName: 'MainScreen'
})

export default createAppContainer(AppNavigator);
