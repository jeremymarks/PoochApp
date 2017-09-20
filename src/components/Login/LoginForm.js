
import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';
import * as firebase from "firebase";
import DismissKeyboard from "dismissKeyboard";

export default class LoginForm extends Component {   

        constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            response: "",
            isLoading: false,
        };

        // this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }
        
        async login() {
            
                    DismissKeyboard();
                    this.setState({ isLoading: true })

                    try {
                        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
                        this.props.onLogin()
                        
                        this.setState({
                            response: "Logged In!",
                            isLoading: false
                        });
            
                        // setTimeout(() => {
                        //     this.props.navigator.push({
                        //         name: "LoginStack"
                        //     })
                        // }, 1500);
            
                    } catch (error) {
                        Alert.alert('Error', error.message, [{text: 'Close', style: 'cancel' }])
                        this.setState({
                            response: error.toString(),
                            isLoading: false
                        })
                    }
            
                }

    render() {
        if (this.state.isLoading) {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator animating color="white" size="large" />
              </View>
            );
          }
        
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"
                />
                    <TextInput
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        placeholder="username or email"
                        returnKeyType="next"
                        onChangeText={(email) => this.setState ({email})}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        clearButtonMode="while-editing"
                        autoCorrect={false}
                     />
                     <TextInput
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        placeholder="password"
                        returnKeyType="go"
                        secureTextEntry
                        style={styles.input}
                        clearButtonMode="while-editing"
                        onChangeText={(password) => this.setState({password})}
                        ref={(input) => this.passwordInput = input}
                     />

                     <TouchableOpacity style={styles.loginButtonContainer} onPress={this.login} >
                         <Text style={styles.loginButtonText}>LOGIN</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.forgotPasswordContainer} onPress={this.props.toForgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUpContainer} onPress={this.props.toSignup} >
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
       padding: 20
    },
    input: {
        height: 40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: 'white',
        paddingHorizontal:10,
    },
    loginButtonContainer: {
        backgroundColor: '#2980b9',
        marginTop: 5,
        paddingVertical: 10
    },
    loginButtonText:{
        textAlign:'center',
        color: 'white',
        fontWeight: '700'   
     },
     forgotPasswordText: {
        textAlign:'center',
        color: 'white',
        opacity: 0.8  
    },
    forgotPasswordContainer: {
        paddingVertical: 20
    },
    signUpContainer: {
        paddingVertical: 10
    },
    signUpText: {
        textAlign:'center',
        color: 'white'
    }

});