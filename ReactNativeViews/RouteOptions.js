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
        return (<ScrollView>
                <RouteOption></RouteOption>
                <RouteOption></RouteOption>

                <RouteOption></RouteOption>
                <RouteOption></RouteOption>

                <RouteOption></RouteOption>
                <RouteOption></RouteOption>

                <RouteOption></RouteOption>
                <RouteOption></RouteOption>
            </ScrollView>)
    }
}
 class RouteOption extends Component {
     constructor(props){
         super(props);
    }
     render(){
         return(<View style={RouteOptionStyle.view}><Text style={RouteOptionStyle.text}>Hello</Text></View>);
    }
}
export default Scroll;