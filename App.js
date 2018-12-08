import React, { Component } from 'react';
import { DeviceEventEmitter, SafeAreaView, Text } from 'react-native';
import Beacons from 'react-native-beacons-manager';

const regions = [
    {
        identifier: 'Estimotes',
        uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
    }
];

const stylesheet = {
    flex:1
}


export default class PayBus extends Component {
    constructor(props) {
        super(props);

        Beacons.requestWhenInUseAuthorization();
        
        regions.forEach(region => {
            Beacons.startMonitoringForRegion(region);
            Beacons.startRangingBeaconsInRegion(region);
        });

        Beacons.startUpdatingLocation();

        this.subscription = DeviceEventEmitter.addListener('beaconsDidRange', data => {
            console.log("Regions: " + data);
        });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={{ flex: 1, alignItems: "center" }}>Hello World.</Text>
            </SafeAreaView>
        )
    }
}
}
