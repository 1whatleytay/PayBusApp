// Beacons Manager
import Beacons from 'react-native-beacons-manager';
import { DeviceEventEmitter } from 'react-native';

const regions = [
    {
        identifier: "Raspberry Pi",
        uuid: "0D5C6FAD-6425-40E9-A106-228BAC3CB732"
    }
];

class BeaconListener {
    constructor() {
        console.log("Creating BeaconListener...")

        Beacons.requestAlwaysAuthorization()

        regions.forEach(region => {
            Beacons.startMonitoringForRegion(region)
            Beacons.startRangingBeaconsInRegion(region)
            console.log("Listening for region " + region.uuid)
        });

        Beacons.startUpdatingLocation()

        this.listener = DeviceEventEmitter.addListener('beaconsDidRange', data => {
            for (var region in regions) {
                if (region.uuid === data.region.uuid) {
                    alert("Detected Device: " + region.uuid)
                }
            }
        })
    }
}