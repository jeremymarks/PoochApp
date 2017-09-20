
import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import * as firebase from "firebase";
import DismissKeyboard from "dismissKeyboard";

export default class SignupForm extends Component {
      constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            response: ""
        };

        this.signup = this.signup.bind(this);
    }

      async signup() {
        
                DismissKeyboard();
        
                try {
                    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
                    this.props.onSignup()


            this.setState({
                response: "account created"
            });
            
            // setTimeout(() => {
            //     this.props.navigator.push({
            //         name: "Home"
            //     })
            // }, 1500);
        
                } catch (error) {
                    Alert.alert('Error', error.message, [{text: 'Close', style: 'cancel' }])
                    this.setState({
                        response: error.toString()
                    })
                }
            }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"
                />
                    <TextInput
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        placeholder="email"
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
                        returnKeyType="next"
                        secureTextEntry
                        style={styles.input}
                        onChangeText={(password) => this.setState({password})}
                        ref={(input) => this.passwordInput = input}
                        clearButtonMode="while-editing"
                        onSubmitEditing={() => this.passwordConfirm.focus()}
                     />

                     <TouchableOpacity style={styles.loginButtonContainer} onPress={this.signup} >
                         <Text style={styles.loginButtonText}>SIGN UP</Text>
                     </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
       padding: 20,
       backgroundColor: '#3498db',
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
        marginBottom: 90,
        paddingVertical: 10
    },
    loginButtonText:{
        textAlign:'center',
        color: 'white',
        fontWeight: '700',  
    }

});