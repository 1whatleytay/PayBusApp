import React, { Component } from "react"
import { View, Text, Button} from "react-native"
import { RaisedTextButton } from "react-native-material-buttons"

console.disableYellowBox = true;

export default class NewRouteScreen extends Component {
    render() {
        // alert(JSON.stringify(this.props.navigation.state,""," "))
        return (
            <View style={{flex:1, }}>
            <View style={{flex:1, justifyContent:"center", alignContent:"center", alignSelf:"center"}}>
                <Text style={{fontSize:50, color:"#222"}}>Route #{ this.props.navigation.state["params"].obj["id"] }</Text>
                <Text style={{fontSize:30, color:"#444"}}>Entry: { this.props.navigation.state["params"].obj["entry"] }</Text>
                <Text style={{fontSize:30, color:"#444"}}>Distination: { this.props.navigation.state["params"].obj["exit"] }</Text>
            </View>
            <View>
                <RaisedTextButton style={{height: 100, backgroundColor:"#00ADB5", borderRadius:0}} titleStyle={{fontSize:25}} title="Start route" titleColor="rgb(255,255,255)"></RaisedTextButton>
            </View>
        </View>
        )
    }
}