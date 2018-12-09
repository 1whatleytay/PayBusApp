// Beacons Manager
import Beacons from 'react-native-beacons-manager'
import { AsyncStorage, DeviceEventEmitter } from 'react-native'

import axios from 'axios'

const regions = [
    {
        identifier: 'Raspberry Pi',
        uuid: '0D5C6FAD-6425-40E9-A106-228BAC3CB732'
    }
];

export default class BeaconListener {
    constructor() {
        console.log('Creating BeaconListener...')

        Beacons.requestAlwaysAuthorization()

        regions.forEach(region => {
            Beacons.startMonitoringForRegion(region)
            Beacons.startRangingBeaconsInRegion(region)
            console.log('Listening for region ' + region.uuid)
        });

        Beacons.startUpdatingLocation()

        this.listener = DeviceEventEmitter.addListener('beaconsDidRange', data => {
            console.log('Detected bus: ' + data.region.uuid)
            if (data.beacons[0] !== undefined && data.beacons[0].proximity === 'immediate') {
                const uuid = data.beacons[0].uuid
                const token = async () => await AsyncStorage.getItem('token')
                console.log("UUID: " + uuid)
                axios.post('https://api.alliboard.com/nearby/', { uuid }, {
                    headers: { authorization: 'Bearer ' + token() }
                }).catch(err => { console.log(err) })
            }
        })
    }
}