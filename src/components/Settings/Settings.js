import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import * as firebase from "firebase";
import { NavigationActions } from 'react-navigation'

class Settings extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
}

onLogout() {   
    const resetAction = navigate.reset({
        index: 0,
        actions: [
          navigate.push({ routeName: 'Root'})
        ]
      })
      this.props.navigation.dispatch(resetAction)     
}

  async logout() {
    
            try {
    
                await firebase.auth().signOut();
                console.log('Logout Successful')
                alert('Logout Successful, I just cannot take you where you need to go')
                // this.onLogout()
            } catch (error) {
                console.log(error);
            }
    
        }
  
  
  render() {

    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
            onPress={this.logout}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
