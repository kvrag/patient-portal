import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import AppNavigator from './src/navigators/AppNavigator'
import Login from './src/contexts/Auth/Login'
import Register from './src/contexts/Auth/Register'

const RootStack = createStackNavigator(
  {
    AppNavigator: {
      screen: AppNavigator
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header: null
    }
  },
)

export default class App extends Component {
  render() {
    return <RootStack />
  }
}
