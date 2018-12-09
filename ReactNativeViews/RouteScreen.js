import React, { Component } from "react"
import { AsyncStorage, StyleSheet, Button, Text, FlatList } from "react-native"
import {} from "react-navigation"

import { TextButton } from "react-native-material-buttons"
let id = 0;
const routeStyle = StyleSheet.create({
    fullFlex: {
        flex: 1,
    },
    breifRoute: {
        minHeight: 40,
        borderStyle: "solid",
        borderWidth: 1,
        borderTopWidth: 0,
        fontSize: 30
    }
})

class RouteListItem extends Component {
    onPress(nav, id) {
        // alert(JSON.stringify(this.props.props, "", " "));
        nav("NewRoute", { routeId: id })
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TextButton title={this.props.name} style={routeStyle.breifRoute} onPress={this.onPress(this.props.navigation.navigate, this.props.id)}>{this.props.name}</TextButton>
        )
    }
}

export default class RouteScreen extends Component {
    constructor(props) {
        super(props)

        this.routes = [
            { name: "My Name", id: 657, },
            { name: "My Thinbvbdvg", id: 983, },
            { name: "My Thindsfgfhdgg", id: 983, },
            { name: "My Thidsffng", id: 983, },
            { name: "My Thindsfdsfgg", id: 983, },
            { name: "My Thinwrejdsg", id: 983, },
            { name: "My qewqeqweThing", id: 983, },
            { name: "My Thweqweqweing", id: 983, },
            { name: "Myqwe qweThing", id: 983, },
            { name: "My Thidsffng", id: 983, },
            { name: "My Thindddg", id: 983, },
            { name: "Myuudfh Thing", id: 983, },
            { name: "My sadfdsThing", id: 983, },
            { name: "Mysdsd Thing", id: 983, },
            { name: "My Thsisssng", id: 983, },
            { name: "Mdsay Thing", id: 983, },
            { name: "ssMy Thing", id: 983, },
            { name: "Msy Thing", id: 983, },
            { name: "My Thigggfng", id: 983, },
            { name: "My Thiffdsng", id: 983, },
            { name: "My Tssddhing", id: 983, },
            { name: "My Thisnsg", id: 983, },
            { name: "Myadsas Thing", id: 983, },
            { name: "My Thisadng", id: 983, },
        ]
    }

    render() {
        return (
            <FlatList data={this.routes}
                renderItem={({item}) => {
                    // console.warn(this.props);
                    return (
                    <RouteListItem name={item.name} routeId={item.id}></RouteListItem>
                )}}/>
        );
    }

}