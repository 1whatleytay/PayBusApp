import React, { SafeAreaView, Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

const stylesheet = {
    flex:1
}


export default class PayBus extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Text style={{flex: 1, alignItems:"center",justifyContent:"center"}}>Hello</Text>)
        }
    }