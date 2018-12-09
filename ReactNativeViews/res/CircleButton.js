import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native"

const styles = StyleSheet.create({
  button:{
    display:"flex",
    height: 150,
    width:this.height,
    backgroundColor: "#222",
    justifyContent:"center",
    alignItems:"center",
    margin:12,
    borderRadius: 100

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