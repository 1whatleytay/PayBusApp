import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import PersonalData from './res/PersonalData'
const ProofStyles = StyleSheet.create({
  Text: {
    justifyContent: "center",
    margin: 15,
    marginBottom: 0,
    marginTop: 12,
    padding: 15,

    borderRadius: 4,
    fontSize: 25,

    color: "white",
    backgroundColor: "#02C39A",
  }
});

export default class ProofScreen extends Component {
    render() {
        let input1 =this.props.navigation.state["params"] ? (this.props.navigation.state["params"]["money"] / 100).toFixed(2) : "";
        let entry_exit = this.props.navigation.state["params"] ?this.props.navigation.state["params"]["entry"] + " to " + this.props.navigation.state["params"]["exit"] : "";
        return (
            <View>
                <PersonalData></PersonalData>
                <View style={{ height: 500 }}>
                    <Text style={ProofStyles.Text}>
                        You have authorized a payment of ${input1}.
                    </Text>
                    <Text style={ProofStyles.Text}>
                        You will be going from {entry_exit}.
                    </Text>
                </View>
            </View>
        )
    }
}