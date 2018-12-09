import React from "react";
import {TouchableOpacity, StyleSheet, Text, Image, Alert, AsyncStorage,BackHandler} from "react-native"
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
    borderColor:"#222",
    borderWidth:1,
    overflow: "hidden"
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
    return (
    <TouchableOpacity style = {styles.button} onPress = {() => {
          Alert.alert("Attention", "Would you like to logout?", [{
            text: "Yes",
            onPress: () =>
            {
              AsyncStorage.removeItem('token')
              BackHandler.exitApp()
            }

          }, { text: "No.",
          onPress: () =>
            console.log("FUCK OFF")

        }])
        }
      } >
      <Image style={{width:diameter*2, height: diameter*2}} resizeMode="contain" source={require("../../Images/avatar.jpg")}></Image>
    </TouchableOpacity>
    );
  }
}