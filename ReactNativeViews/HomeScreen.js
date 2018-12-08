// React
import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

// Beacons Manager
import Beacons from 'react-native-beacons-manager';
import { DeviceEventEmitter } from 'react-native';

const BalanceStyleSheet = StyleSheet.create({
    button:{
      
    },
    Circle:{
        backgroundColor: "red",
        display:"flex",
        width: 100,
        height: 100,
    },
    Navigator:{
        position:"absolute",
    }
});

class CircleBalanceView extends Component {
    constructor(props){super(props)}
    render(){
        return (<View style={BalanceStyleSheet.Circle}><Text>Hello world!</Text></View>);
    }
}
class BalanceSheet extends Component {
    constructor(props){
        super(props)

        Beacons.request
    }
    render(){
        return(
            <View>
                <CircleBalanceView></CircleBalanceView>
            </View>
        );
    }
}

const regions = [
    {
        identifier: "Raspberry Pi",
        uuid: "0D5C6FAD-6425-40E9-A106-228BAC3CB732"
    }
];

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    constructor(props) {
        super(props)

        Beacons.requestAlwaysAuthorization()
        Beacons.getAuthorizationStatus()

        for (var region in regions) {
            Beacons.startMonitoringForRegion(region)
            Beacons.startRangingBeaconsInRegion(region)
        }

        Beacons.startUpdatingLocation()

        this.listener = DeviceEventEmitter.addListener('beaconsDidRange', data => {
            for (var region in regions) {
                if (region.uuid === data.region.uuid) {
                    alert("Detected Device: " + region.uuid)
                }
            }
        })
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
            <BalanceSheet></BalanceSheet>
            <View style={BalanceStyleSheet.Navigator}>
                <Button title="Go to saved routes" onPress={() => navigate('Profile', {name:"jen"})}></Button>
                <Button title="Goto " onPress={() => navigate('Profile', {name:"jen"})}></Button>
            </View>
            </View>
        )
    }
}

export default HomeScreen;