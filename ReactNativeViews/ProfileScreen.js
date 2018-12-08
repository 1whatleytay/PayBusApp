import React, {
    Component
} from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    Text
}
from "react-native";

const RouteOptionStyle = StyleSheet.create({
    view: {
        backgroundColor: "red",
    },
    text: {
        color: "#ffffff"
    }
})

class Scroll extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<Text>Hello world</Text>)
    }
}

export default Scroll;