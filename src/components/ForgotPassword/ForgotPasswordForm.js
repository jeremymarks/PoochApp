
import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default class ForgotPasswordForm extends Component {
    _onPressButton() {
        Alert.alert('Password reset email sent!')
      }
   
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"
                />
                    <TextInput
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        placeholder="email"
                        returnKeyType="go"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="while-editing"
                     />
                

                     <TouchableOpacity style={styles.resetButtonContainer} onPress={this._onPressButton}>
                         <Text style={styles.resetButtonText}>RESET</Text>
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
    resetButtonContainer: {
        backgroundColor: '#2980b9',
        marginTop: 5,
        alignItems: 'center',
        marginBottom: 90,
        paddingVertical: 10
    },
    resetButtonText:{
        textAlign:'center',
        color: 'white',
        fontWeight: '700'   
     },

});