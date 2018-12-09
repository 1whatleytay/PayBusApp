// React
import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

// Custom elements
import BetterButton from "./res/BetterButton"

// Beacons
import BeaconListener from '../BeaconListener'

const balanceStyle = StyleSheet.create({
    Navigator:{
        flex:0
    },
    wrapper: {
        marginTop: 50,
        padding: 15,
        height:100,
        display:"flex",
        alignSelf: "center",
        backgroundColor: "#353B38",
        borderRadius: 100
    }, text: {
        fontSize: 50,
        color:"white",
    },
});

class BalanceSheet extends Component {
    render() {
        const formattedBalance = '$' + (Number(this.props.balance) / 100).toFixed(2)
        return(
            <View style={ balanceStyle.wrapper }>
                <Text style={ balanceStyle.text }>{formattedBalance}</Text>
            </View>
        );
    }
}

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Alliboard',
    };

    constructor(props) {
        super(props)
        
        this.listener = new BeaconListener()
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <BalanceSheet balance="9000145"/>
                </View>
                <View style={ balanceStyle.Navigator}>
                    <BetterButton title="Go to saved routes" onPress={() => navigate('Profile', {name:"jen"})}></BetterButton>
                </View>
            </View>
        )
    }
}

export default HomeScreen;