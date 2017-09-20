import React, { Component } from 'react';
import { Alert, Button, View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import { NavigationActions } from 'react-navigation'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onLogin = this.onLogin.bind(this);
    }
    
    onLogin() {
        
        
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Tabs'})
            ]
          })
          this.props.navigation.dispatch(resetAction)
          
          
    }

    
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.LogoContainer}>
                        <Image 
                        style={styles.logo}
                        source={require('../../images/poochAppWhite.png')}>
                        </Image>
                        <Text style={styles.title}>Know when and where to take your dog to play!</Text>
                    </View>
                    <View style={styles.formContainer}>
                    <LoginForm onLogin={this.onLogin} toSignup={() => navigate('Signup')} toForgotPassword={() => navigate('ForgotPassword')} />
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
        justifyContent: 'center'
      },
    logo:{
        width: 100,
        height: 100
    },
    title: {
        color: 'white',
        marginTop: 10,
        width:160,
        textAlign: 'center',
        opacity: 0.8
    }

});