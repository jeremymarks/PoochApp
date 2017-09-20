import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import ForgotPasswordForm from './ForgotPasswordForm';

export default class Login extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.LogoContainer}>
                        <Text style={styles.title}>Enter your email address to reset your password</Text>
                    </View>
                    <View style={styles.formContainer}>
                    <ForgotPasswordForm  />
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