import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native';
import SignupForm from './SignupForm';
import DismissKeyboard from "dismissKeyboard";
import { NavigationActions } from 'react-navigation'

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.onSignup = this.onSignup.bind(this);
    }
    
    onSignup() {
        
        
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Tabs'})
            ]
          })
          this.props.navigation.dispatch(resetAction)
          
          
    }

    
    render() {
        console.log(this.props)
        const { navigate } = this.props.navigation;
        return (

            <KeyboardAvoidingView behavior="padding" style={styles.container} onPress={() => {DismissKeyboard()}}>
                    <View style={styles.LogoContainer}>
                    <Text style={styles.title}>Enter your email and a password to sign up to Pooch App!</Text>
                        <Image 
                        style={styles.logo}
                        source={require('../../images/poochAppWhite.png')}>
                        </Image>
                      
                    </View>
                    <View style={styles.formContainer}>
                    <SignupForm onSignup={this.onSignup}/>
                    </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#3498db"
        
    },
    LogoContainer: {
        alignItems:'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo:{
        width: 100,
        height: 100
    },
    title: {
        color: 'white',
        marginTop: 10,
        width:300,
        textAlign: 'center',

    },
    formContainer: {
    }

});