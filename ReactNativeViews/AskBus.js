import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'

import { RaisedTextButton } from 'react-native-material-buttons'

import axios from 'axios'

export default class AskBus extends Component {
    async checkRoutes() {
        let token = await AsyncStorage.getItem("token")

        let uuid = this.props.navigation.state["params"]["uuid"];
        // axios.post('https://api.alliboard.com/trips/', {uuid}, {
        //     headers: { authorization: "Bearer " + token }
        // }).then((response) => {
        //     console.log("resp: " + response)
        //     this.props.navigation.replace("Proof", { money: response.cost,
        //         entry: "St John's Go Station", exit: "Central Stop"})
        // }).catch(console.error)
        this.props.navigation.replace("Proof", { money: 250,
            entry: "St John's Go Station", exit: "Central Stop"})
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