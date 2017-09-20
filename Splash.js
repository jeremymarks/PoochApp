import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Pooch App</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Know when and where to take your dog for a play!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#2980b9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: '#ecf0f1',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle:{
        color: '#ecf0f1',
        fontWeight:'200',
        padding: 20
    },
    titleWrapper:{
        justifyContent: 'center',
        flex: 1,
    }

});