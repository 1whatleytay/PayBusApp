import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { RaisedTextButton } from 'react-native-material-buttons'

export default class AskBus extends Component {
    constructor(props) {
        super(props)
    }

    checkRoutes() {
        console.log("Checking for route: " + this.props.navigation.state.uuid)
    }

    render() {
        return (
            <View>
                <Text style={{ textAlign: "center", fontSize: 40, marginTop: 50 }}>
                    Are you getting on the bus?</Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 50 }}>
                    <RaisedTextButton title="Yes" onPress={ () => this.checkRoutes() }>Yes</RaisedTextButton>
                    <RaisedTextButton title="No" onPress={ () => this.props.navigation.goBack() }>No</RaisedTextButton>
                </View>
            </View>
        )
    }
}