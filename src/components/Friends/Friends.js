import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../../Config/data';

export default class Friends extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('FriendsDetail', { ...user });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <List style={styles.list}>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
              style={styles.listItem}
              subtitleStyle={styles.subtitleStyle}
              titleStyle={styles.titleStyle}
              chevronColor="#2c3e50"
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
 // paddingTop: 22,
   backgroundColor: "#ecf0f1",
  },
  listItem: {
    padding: 10,
    paddingBottom: 20,
    height: 55,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ecf0f1",
    borderTopColor: "#ecf0f1",
    backgroundColor: "white",
  },
  subtitleStyle: {
    color: "#2c3e50",
    fontWeight: "normal"
  },
  titleStyle: {
    color: "#2c3e50",
    fontWeight: "normal",
  },
  list:
  {
    padding: 0,
  },

  
})