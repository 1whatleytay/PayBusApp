import React, { Component } from "react"
import { View, AsyncStorage, StyleSheet, Button, Text, FlatList } from "react-native"

import { TextButton } from "react-native-material-buttons"
let navigate = null;
const routeStyle = StyleSheet.create({
    fullFlex: {
        flex: 1,
    },
    breifRoute: {
        height: 70,
        borderStyle: "solid",
        borderWidth: 1,
        borderTopWidth: 0,
        fontSize: 70
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
      navigate.navigate("NewRoute", this.obj);
    }

    constructor(_props) {
        super(_props)

        this.obj = _props.obj
    }

    render() {
        return (
            <TextButton title={this.props.obj.name} style={routeStyle.breifRoute} onPress={() => this.onPress()}>{this.props.obj.name}</TextButton>
        )
    }
}

export default class RouteScreen extends Component {
    static navigationOptions = {
        title: 'Select a Route...',
    };

    constructor(props) {
        super(props)
        if(!navigate) navigate = this.props.navigation;

        this.routes = [
            { name: "Go To Work", id: 560, entry: "St John's Go Station", exit: "Central Stop" },
            { name: "Go Home From Grocery Store", id: 320, entry: "Metro Mall Stop", exit: "Dorval Stop" },
            { name: "Go to Jeffery's House", id: 340, entry: "St John's Go Station", exit: "Bentway Road Stop" }
        ]
    }

    render() {
        return (
          <View>
          <FlatList data={this.routes}
                renderItem={({item}) => {
                    // console.warn(this.props);
                    return (
                    <RouteListItem obj={item}></RouteListItem>
                )}}/>

            </View>
        );
    }

}