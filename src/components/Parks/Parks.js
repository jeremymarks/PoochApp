import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View  } from 'react-native';
import MapView from 'react-native-maps';
import { SearchBar, Icon } from 'react-native-elements'


export default class Parks extends Component {
    render() {
        return (
                <View style={styles.container} >
                    <MapView
                    style={styles.mapview}
                    initialRegion={{
                        latitude: -37.897001,
                        longitude: 145.071735,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                        <View style={styles.searchcontainer} > 
                        <Icon style={styles.searchIcon} name="search" size={20} color="grey"/>
                            <TextInput
                                placeholderTextColor="grey"
                                placeholder="Search for a park..."
                                returnKeyType="go"
                                style={styles.input}
                                clearButtonMode="while-editing"
                            />
                        </View>
                     </MapView>
                 </View> 
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        flexGrow: 1
    },
    
    input: {
             height: 20,
             color: 'black',
             paddingHorizontal: 10,
             width: "90%"
    },
    searchIcon: {
        padding: 10,
    },
    searchcontainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        backgroundColor: "white",
        padding: 5,
        margin: 10,
        shadowColor: "grey",
        shadowOpacity: 0.6,
        shadowRadius: 2,
        shadowOffset: {
            height: 0.6,
            width: 0,
        },

        
    },
    mapview: {
      flex: 1
      },




});
