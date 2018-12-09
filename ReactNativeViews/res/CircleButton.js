import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native"
let diameter = 100;
const styles = StyleSheet.create({
  button:{
    margin:12,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height: diameter,
    width: diameter,
    backgroundColor: "#222",
    borderRadius: 100,
    borderColor:"red",
    borderWidth:1
  },
  buttonText:{
    color: "white",
    fontSize:20
  }
})

export default class CircleButton extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<TouchableOpacity
      style={styles.button}>
      <Text style={styles.buttonText}>{this.props.title}</Text>
    </TouchableOpacity>);
  }
}