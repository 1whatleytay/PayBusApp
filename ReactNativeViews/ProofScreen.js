import React, { Component } from 'react'
import { View, Text } from 'react-native'

import PersonalData from './res/PersonalData'

export default class ProofScreen extends Component {
    render() {
        return (
            <View>
                <PersonalData></PersonalData>
                <View style={{ height: 500 }}>
                    <Text style={{ backgroundColor: "#02C39A", fontSize: 25, justifyContent: "center", borderRadius: 20, margin: 15, padding: 15 }}>
                        You have authorized a payment of $
                            { (this.props.navigation.state["params"]["money"] / 100).toFixed(2) }.
                    </Text>
                    <Text style={{ backgroundColor: "#02C39A", fontSize: 25, justifyContent: "center", borderRadius: 20, margin: 15, padding: 15 }}>
                        You will be going from { this.props.navigation.state["params"]["entry"] } to { this.props.navigation.state["params"]["exit"] }.
                    </Text>
                </View>
            </View>
        )
    }
}