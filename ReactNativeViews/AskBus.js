import React, { Component } from 'react'
import { View, Text, AsyncStorage, StyleSheet } from 'react-native'

import { RaisedTextButton } from 'react-native-material-buttons'

import axios from 'axios'
const ButtonStyle = StyleSheet.create({
  NormalButton: {
    flex: 1,
    margin: 10,
    height: 100,
    backgroundColor: "#222",
    borderRadius: 0,

  },
  ButtonYes: {
    backgroundColor: "#00ADB5"
  },
  ButtonNo: {
    backgroundColor: "#222"
  },
});

export default class AskBus extends Component {
    async checkRoutes() {
        let token = await AsyncStorage.getItem("token")
        let uuid = null

        try {
          uuid = this.props.navigation.state["params"]["uuid"];
        } catch (e) {
          console.warn("Skipped as this.props.navigation.state.params was not found.")
        }
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
                    <RaisedTextButton style={[ButtonStyle.NormalButton, ButtonStyle.ButtonYes]} titleColor="rgb(255,255,255)" title="Yes"  onPress={ () => this.checkRoutes() }>Yes</RaisedTextButton>
                    <RaisedTextButton  style={[ButtonStyle.NormalButton, ButtonStyle.ButtonNo]} titleColor="rgb(255,255,255)" title="No" onPress={ () => this.props.navigation.goBack() }>No</RaisedTextButton>
                </View>
            </View>
        )
    }
}