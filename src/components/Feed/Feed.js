import React, { Component } from 'react';
import { Text, StyleSheet, View, Image} from 'react-native';

export default class Feed extends Component {

    
    render() {
        
        return (
            <View behavior="padding" style={styles.card}>
            <Text style={{paddingBottom: 5, fontWeight: 'bold'}}>Jez</Text>
            <Image source={{uri: "http://localz.wpengine.com/wp-content/uploads/2016/08/localz_wwhite.png", isStatic: true }} style={{height: 250}} />
            <Text style={{paddingTop: 5, textAlign: 'center', fontStyle: 'italic'}}>
              {'Localz'}
            </Text>
          </View>
    
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#3498db",
        padding: 20
    },
    titleContainer: {
        alignItems:'center',
        flexGrow: 1,
        justifyContent: 'flex-start'
      },
      title: {
        color: 'white',
        marginTop: 10,
        width:160,
        textAlign: 'center',
        opacity: 0.8
    },
    card: {
        color: 'white',
        marginTop: 10,
        width:160,
        textAlign: 'center',
    },

});
