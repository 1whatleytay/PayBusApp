import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native"
const styles = StyleSheet.create({
  button:{
    display:"flex",
    height: 120,
    margin:0,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#222",
  },
  buttonText:{
    color: "white",
    fontSize:20
  }
})

export default class BetterButton extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <TouchableOpacity
      style={styles.button}>
      <Text style={styles.buttonText}>{this.props.title}</Text>
    </TouchableOpacity>)
  }
}