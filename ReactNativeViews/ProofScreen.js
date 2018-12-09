import React, { Component } from 'react'
import { View, Text } from 'react-native'

import PersonalData from './res/PersonalData'

export default class ProofScreen extends Component {
    render() {
        return (
            <View>
                <PersonalData></PersonalData>
                <View style={{ backgroundColor: "yellow", height: 500 }}>
                    <Text style={{ fontSize: 25 }}>
                        You have authorized a payment of $
                            { (this.props.navigation.state["params"]["money"] / 100).toFixed(2) }.
                    </Text>
                    <Text style={{ fontSize: 25 }}>
                        You will be going from { this.props.navigation.state["params"]["entry"] }
                            to { this.props.navigation.state["params"]["exist"] }.
                    </Text>
                </View>
            </View>
        )
    }
}