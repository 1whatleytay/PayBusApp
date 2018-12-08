import React, {
  Component
} from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text, Button
}
from "react-native";


const BalanceStyleSheet = StyleSheet.create({
  button:{

  },
  Circle:{
    backgroundColor: "red",
    display:"flex",
    width: 100,
    height: 100,
  },
  Navigator:{
    position:"absolute",

  }
});

class CircleBalanceView extends Component {
  constructor(props){super(props)}
  render(){
    return (<View style={BalanceStyleSheet.Circle}><Text>Hello world!</Text></View>);
  }

}
class BalanceSheet extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(<View>
          <CircleBalanceView></CircleBalanceView>
      </View>);
  }
  
}

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props)
  }
  render() {
    const {
      navigate
    } = this.props.navigation;
    return (
      <View>
      <BalanceSheet></BalanceSheet>
      <View style={BalanceStyleSheet.Navigator}>
        <Button title="Go to saved routes" onPress={() => navigate('Profile', {name:"jen"})}></Button>
        <Button title="Goto " onPress={() => navigate('Profile', {name:"jen"})}></Button>
      </View>
      </View>
      )
    }
  }

export default HomeScreen;