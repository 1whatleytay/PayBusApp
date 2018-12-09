import React, {Component} from "react";
import {StyleSheet, Text, View, AsyncStorage} from "react-native";
import axios from "axios";

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
        this.state = {};

        // alert("Here ya go: " + this.props.token);
        AsyncStorage.getItem('token').then((res, err) => {

            // alert("Here ya go: " + JSON.stringify(res));
            return axios.get("https://api.alliboard.com/users/me/profile", {
                headers: {
                    authorization: `Bearer ${res}`
                }
            }).then(res => {
                this.setState({
                    balance: res.data.balance,
                    name: res.data.name
                })
            })
        }).catch(e => {

            console.error(`Something occured: ${e}`);
        })
    }


    render(){
      return (
          <View style={{ flexDirection:"row" ,shadowColor:"black",shadowOpacity:1.0,shadowOffset:{width:1, height:1}, elevation:2, backgroundColor:"white", width:1000 }}>
              <CircleButton title={this.props.image}></CircleButton>
              <View style={{flexDirection:"column", justifyContent:"space-around"}}>
                  <Text style={this.style.text}>{this.state.name}</Text>
                  <Text style={this.style.text}>${parseFloat(this.state.balance)/100}</Text>
              </View>
          </View>)
    }
}