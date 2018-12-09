// React
import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

// Beacons
import BeaconListener from '../BeaconListener'

const balanceStyle = StyleSheet.create({
    Navigator:{
        position:"absolute",
    },
    text: {
        fontSize: 50,
    },
    wrapper: {
        marginTop: 50,
        padding: 15,
        backgroundColor: "#3498db",
        alignSelf: "center",
        borderRadius: 40
    }
});

class AddFunds extends Component {
    render() {
        return (
            <View>
                <Text></Text>
            </View>
        )
    }
}

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
            <View>
                <BalanceSheet balance="9000145"/>
                <View style={ balanceStyle.Navigator }>
                    <Button title="Go to saved routes" onPress={() => navigate('Profile', {name:"jen"})}></Button>
                    <Button title="Goto " onPress={() => navigate('Profile', {name:"jen"})}></Button>
                </View>
                <View style={{ flex: 1 }}>

                </View>
            </View>
        )
    }
}

export default HomeScreen;