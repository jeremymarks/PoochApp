/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import {DrawerNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import Splash from './Splash';
import Login from './src/components/Login/Login';
import Signup from './src/components/Signup/Signup';
import { Tabs, Root, LoginStack, FeedStack } from './src/Config/Router';
import Feed from './src/components/Feed/Feed';
import Parks from './src/components/Parks/Parks';
import Friends from './src/components/Friends/Friends';
import Me from './src/components/Me/Me';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDGiMDyhaPiCT6q44wM5NNDImt3AeFSTI8",
  authDomain: "poochapp-1505392754856.firebaseapp.com",
  databaseURL: "https ://poochapp-1505392754856.firebaseio.com",
  projectId: "poochapp-1505392754856",
  storageBucket: "poochapp-1505392754856.appspot.com",
  messagingSenderId: "663798218625"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class PoochApp extends Component {
  // state = {
  //   isLoggedIn: false
  // }
  
  render() {
     return <LoginStack />  
    // return <LoginStack />  
  }
}

//   if (this.state.isLoggedIn) 
//     return <FeedStack
//         onLogoutPress={() => this.setState({isLoggedIn: false})}
//       />;
//   else 
//     return <LoginStack 
//         onLoginPress={() => this.setState({isLoggedIn: true})}
//       />;
// }}

// Jesse helped me




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PoochApp', () => PoochApp);
