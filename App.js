import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './screens/Navigator';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Require cycle'
])

class App extends Component {
  render () {
    return (
        <NavigationContainer>
          <Navigator/>
        </NavigationContainer>
    );
  }
}

export default (App);