import React, { Component } from "react"
import { View, Text } from "react-native"

export default class NewRouteScreen extends Component {
    render() {
        console.log(this.props.navigation.state)
        return (
            <View>
                <Text>Route Id: { this.props.routeId }</Text>
            </View>
        )
    }
}