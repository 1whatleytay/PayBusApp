import React, { Component } from 'react'
import { StyleSheet, View, AsyncStorage } from 'react-native'

import { RaisedTextButton } from 'react-native-material-buttons'
import { TextField } from 'react-native-material-textfield'

import axios from 'axios'

const loginStyle = StyleSheet.create({
    button: {
        alignSelf: "center",
        marginTop: 50
    },
    pushIn: {
        margin: 20
    }
})

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Alliboard Login',
    };

    constructor(props) {
        super(props)

        this.state = { username: "", password: "" }
    }

    render() {
        return (
            <View style={ loginStyle.pushIn }>
                <TextField label="Email" keyboardType="email-address"
                    onChangeText={username => this.setState({username})}></TextField>
                <TextField label="Password" secureTextEntry={true}
                    onChangeText={password => this.setState({password})}></TextField>
                <RaisedTextButton title="Login" color="#2980b9" style={ loginStyle.button }
                    onPress={() => this.handleLogin(this.state.username, this.state.password)}>
                    Login</RaisedTextButton>
            </View>
        )
    }

    handleLogin(username, password) {
        axios.post('https://api.alliboard.com/oauth/token', {
            grant_type: 'password',
            client_id: 1,
            client_secret: 'gmJDSvVRjideHVIFupRiOceTFgZuyW3U0Fi5vbRj',
            username,
            password,
            scope: ''
        }).then(response => {
            AsyncStorage.setItem('token', response.data.access_token).then(
                () => this.props.navigation.navigate('Home'))
        }).catch(() => alert('Failed to login! Please try again...'))
    }
}
