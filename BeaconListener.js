// Beacons Manager
import Beacons from 'react-native-beacons-manager'
import { AsyncStorage, DeviceEventEmitter } from 'react-native'

import axios from 'axios'

const regions = [
    {
        identifier: 'Tablet',
        uuid: '3B4E3C81-BD38-4979-AC08-2DA3C96BC6D2'
    }
];

export default class BeaconListener {
    constructor(token, navigation) {
        this.token = token
        this.navigation = navigation

        this.lastStamp = { uuid: 'no-uuid', time: new Date() }

        console.log('Creating BeaconListener...')

        Beacons.requestAlwaysAuthorization()

        regions.forEach(region => {
            Beacons.startMonitoringForRegion(region)
            Beacons.startRangingBeaconsInRegion(region)
            console.log('Listening for region ' + region.uuid)
        });

        Beacons.startUpdatingLocation()

        this.listener = DeviceEventEmitter.addListener('beaconsDidRange', data => {
            if (data.beacons.length < 1) { return }
            console.log('Detected bus: ' + data.region.uuid + " region: " + data.beacons[0].proximity)

            if (data.beacons[0].proximity === 'immediate' && this.token) {
                if (((this.lastStamp.time.getTime() + 1000 * 60 * 5) < new Date().getTime())
                    || this.lastStamp.uuid !== data.region.uuid) {
                        axios.post('https://api.alliboard.com/nearby/', { uuid: data.region.uuid },
                            { headers: { authorization: 'Bearer ' + this.token }})
                            .then(() => {
                                this.lastStamp.uuid = data.region.uuid
                                this.lastStamp.time = new Date()
                                this.navigation.navigate("AskBus", { uuid: data.region.uuid })
                            }).catch(err => { console.log(err.message) })
                }
            }
        })
    }
}