// React
import React, { Component } from "react"
import { StyleSheet, View, Text, Button, Platform, Image} from "react-native"

import { RaisedTextButton } from "react-native-material-buttons"

// Custom elements
import PersonalData from "./res/PersonalData"

// Beacons
import BeaconListener from '../BeaconListener'

const balanceStyle = StyleSheet.create({
    Navigator:{
        flex:0
    },
    wrapper: {
        marginTop: 50,
        display:"flex",
        padding: 15,
        height:100,
        alignSelf: "center",
        justifyContent:"center",
        backgroundColor: "#353B38",
        borderRadius: 100
    }, balanceText: {
        fontSize: 20,
        color:"white",
    },
});

class BalanceSheet extends Component {
    render() {
        const formattedBalance = '$' + (Number(this.props.balance) / 100).toFixed(2)
        return(
            <View style={ balanceStyle.wrapper }>
                <Text style={ balanceStyle.balanceText }>{formattedBalance}</Text>
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

        if(Platform.OS != "android") this.listener = new BeaconListener()
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:"row"}}>
                    <PersonalData name="Taylor Whatley" balance="0"></PersonalData>
                </View>

                <View style={{flex:1}}>

                </View>
                <View style={ balanceStyle.Navigator}>
                    <RaisedTextButton style={{height: 100, backgroundColor:"#222", borderRadius:0}} title="Go to saved routes" titleColor="rgb(255,255,255)"
                        onPress={() => navigate('Route')}></RaisedTextButton>
                </View>
            </View>
        )
    }
}

export default HomeScreen;