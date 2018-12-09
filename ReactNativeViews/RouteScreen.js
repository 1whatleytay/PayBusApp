import React, { Component } from "react"
import { View, AsyncStorage, StyleSheet, Button, Text, FlatList } from "react-native"

import { TextButton } from "react-native-material-buttons"
let navigate = null;
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

function renderText(length){
  x = "";
  for(let i = 0; i < length; i++){
    x+= String.fromCharCode(97 + Math.floor(Math.random() * (122-97)));
  }
  return x;
}

class RouteListItem extends Component {
    onPress(id) {
      // alert(id);
      console.warn(id);
      navigate.navigate("NewRoute", {routeId: id});
    }

    constructor(_props) {
        super(_props)
        // console.warn(_props.routeId)
        this.id = _props.routeId;
    }

    render() {
        return (
            <TextButton title={this.props.name} style={routeStyle.breifRoute} onPress={() => this.onPress(this.id)}>{this.props.name}</TextButton>
        )
    }
}

export default class RouteScreen extends Component {
    constructor(props) {
        super(props)
        if(!navigate) navigate = this.props.navigation;
        
        this.routes = [
            { name: "My Name", id: 657, },
            { name: `My ${renderText(12)}`, id: 983, },
            { name: `My ${renderText(12)}`, id: 983, },
            { name: `My ${renderText(12)}`, id: 983, },
            { name: `My ${renderText(12)}`, id: 983, },
            { name: `My ${renderText(12)}`, id: 983, },
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
          <View>
          <FlatList data={this.routes}
                renderItem={({item}) => {
                    // console.warn(this.props);
                    return (
                    <RouteListItem name={item.name} routeId={item.id}></RouteListItem>
                )}}/>

                </View>
        );
    }

}