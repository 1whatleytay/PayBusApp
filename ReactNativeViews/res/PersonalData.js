import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native"

// Custom elements
import CircleButton from "./CircleButton"

export default class PersonalData extends Component {
    constructor(props){
        super(props)

        this.style = StyleSheet.create({
            text:{
                fontSize:20
            }
        })
    }

    render(){
      return (
          <View style={{ flexDirection:"row" ,shadowColor:"black",shadowOpacity:1.0,shadowOffset:{width:10, height:10} }}>
              <CircleButton title=""></CircleButton>
              <View style={{flexDirection:"column", justifyContent:"space-around"}}>
                  <Text style={this.style.text}>{this.props.name}</Text>
                  <Text style={this.style.text}>${this.props.balance}</Text>
              </View>
          </View>)
    }
}