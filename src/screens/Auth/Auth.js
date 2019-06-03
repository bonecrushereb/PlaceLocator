import React, { Component } from 'react';
import { View, Button } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }
  render () {
    return (
      <View>
        <Button title="Login" onPress={this.loginHandler}/>
      </View>
    );
  }
}

export default AuthScreen;
