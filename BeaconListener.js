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
    constructor(token) {
        this.token = token

        console.log('Creating BeaconListener...')

        Beacons.requestAlwaysAuthorization()

        regions.forEach(region => {
            Beacons.startMonitoringForRegion(region)
            Beacons.startRangingBeaconsInRegion(region)
            console.log('Listening for region ' + region.uuid)
        });

        Beacons.startUpdatingLocation()

        this.listener = DeviceEventEmitter.addListener('beaconsDidRange', data => {
            if (data.beacons[0] === undefined) {
                console.log('Detected bus: ' + data.region.uuid + " no region")
                return
            }
            console.log('Detected bus: ' + data.region.uuid + " range: " + data.beacons[0].proximity + " access: " + this.token)

            if (data.beacons[0].proximity === 'immediate' && this.token) {
                const uuid = data.beacons[0].uuid
                console.log("Token: " + JSON.stringify(this.token))
                axios.post('https://api.alliboard.com/nearby/', { uuid }, {
                    headers: { authorization: 'Bearer ' + this.token }
                }).catch(err => { console.log(err) })
            }
        })
    }
}