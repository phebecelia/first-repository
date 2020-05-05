import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './screens/Navigator';

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