import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

  import Login from '../components/Login/Login'
  import Signup from '../components/Signup/Signup'
  import ForgotPassword from '../components/ForgotPassword/ForgotPassword'
  import Feed from '../components/Feed/Feed'
  import Me from '../components/Me/Me'
  import Friends from '../components/Friends/Friends'
  import Parks from '../components/Parks/Parks'
  import FriendsDetail from '../components/FriendsDetail/FriendsDetail'
  import Settings from '../components/Settings/Settings'
  

export const FeedStack = StackNavigator({
  Feed: { 
    screen: Feed, 
    navigationOptions:({navigation}) => ({
      title: 'Feed',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3498db',
      },
    }), 
    
  },
});

export const FriendsStack = StackNavigator({
  Friends: { 
    screen: Friends, 
    navigationOptions: { 
      title: 'Friends',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3498db'
      },
    }, },
    FriendsDetail: { 
      screen: FriendsDetail,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#3498db' 
              },
      }),
  
    },
  });


export const ParksStack = StackNavigator({
  Parks: { 
    screen: Parks, 
    navigationOptions: { 
      title: 'Parks',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3498db'
      },
    }, 
  },
});


export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    }
  },},{
        mode: 'modal',
        headerMode :'none',
    });

export const MeStack = StackNavigator({
  Me: { 
    screen: Me, 
    navigationOptions: { 
      title: 'Me',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3498db'
      },
    }, 
  },
  Settings: {
    screen: SettingsStack,
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      title: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="nature-people" size={30} color={tintColor} />

    },
  },
  Friends: {
    screen: FriendsStack,
    navigationOptions: {
      tabBarLabel: 'Friends',
      title: 'Friends',
      tabBarIcon: ({ tintColor }) => <Icon name="pets" size={30} color={tintColor} />
    }
  },
  Parks: {
    screen: ParksStack,
    navigationOptions: {
      tabBarLabel: 'Parks',
      title: 'Parks',
      tabBarIcon: ({ tintColor }) => <Icon name="landscape" size={30} color={tintColor} />
    }
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      title: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={30} color={tintColor} />
    }
  },
},
  {
    tabBarOptions: {
      activeTintColor: '#f1c40f',
      inactiveTintColor: '#ecf0f1',
      animationsEnabled: true,
      swipeEnabled: true,
      style: {
        backgroundColor: '#2980b9',
      },
    }
  });


// export const Root = StackNavigator({
//   Tabs: {
//     screen: Tabs,
//   },
//   Settings: {
//     screen: SettingsStack,
//   },
// },{
//     mode: 'modal',
//     headerMode :'none',
// });



export const LoginStack = StackNavigator({
    Login: { 
      screen: Login, 
      navigationOptions: { 
        title: 'Login',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#3498db'
        },
      }, 
    },
    Signup: { 
      screen: Signup, 
      navigationOptions: { 
        title: 'Signup',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#3498db'
        },
      }, 
      },
      ForgotPassword: { 
        screen: ForgotPassword, 
        navigationOptions: { 
          title: 'Reset Password',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#3498db'
          },
        }, 
      },
      
      Tabs: { 
        screen: Tabs, 
        navigationOptions: { 
          // title: '',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#3498db'
          },
        }, 
      },
      

  },{
    headerMode :'none',
  });