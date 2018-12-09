import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Alliboard Login',
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Please login...</Text>
            </View>
        )
    }
}