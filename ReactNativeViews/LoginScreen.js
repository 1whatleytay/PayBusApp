import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import axios from 'axios';

const loginStyle = StyleSheet.create({
    
});

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Alliboard Login',
    };

    componentDidMount() {
        console.log("Yep")
        this.handleLogin('foo', 'bar')
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text></Text>
            </View>
        )
    }

    async handleLogin(username, password) {
        try {
            await axios.post('https://api.alliboard.com/oauth/token', {
                grant_type: 'password',
                client_id: 1,
                client_secret: 'gmJDSvVRjideHVIFupRiOceTFgZuyW3U0Fi5vbRj',
                username,
                password,
                scope: ''
            })
        } catch (e) {
            console.error(e.response.data)
        }
    }
}