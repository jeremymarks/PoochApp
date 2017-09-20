import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, StyleSheet } from 'react-native-elements';
import { me } from '../../Config/data';

export default class Me extends Component {
  handleSettingsPress = () => {
      this.props.navigation.navigate ('Settings');
  };
  
    render() {

    return (
      <ScrollView>
        <Tile 
          imageSrc={{ uri: me.picture.large}}
          featured
          title={`${me.name.first.toUpperCase()} ${me.name.last.toUpperCase()}`}
          caption={me.login.username}
        />

        <List>
          <ListItem
            title="Settings"
            onPress={this.handleSettingsPress}
          />
          </List>
        <List>
          <ListItem
            title="Breed"
            rightTitle={me.profile.breed}
            hideChevron
          />
          <ListItem
            title="Play Style"
            rightTitle={me.profile.playstyle}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Watch out for"
            rightTitle={me.profile.watchoutfor}
            hideChevron
          />
          <ListItem
            title="I'm Scare of"
            rightTitle={me.profile.scaredof}
            hideChevron
          />
          <ListItem
            title="Favourite Park"
            rightTitle={me.profile.favouritepark}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}



