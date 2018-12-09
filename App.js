import AsyncStorage from 'react-native'

import {createStackNavigator, createAppContainer} from 'react-navigation'

import RouteOption from "./ReactNativeViews/RouteOptions"
import ProfileScreen from "./ReactNativeViews/ProfileScreen"
import HomeScreen from "./ReactNativeViews/HomeScreen"
import LoginScreen from "./ReactNativeViews/LoginScreen"

function isLoggedIn() {
    return true;
    // return AsyncStorage.getItem("loggedIn");
}

console.disableYellowBox = true;
const RootStack = createStackNavigator({
    Home: {
        screen: isLoggedIn ? HomeScreen : LoginScreen
    },
    Profile:{
        screen:ProfileScreen
    },
    Profile: {
        screen: RouteOption
    }
});


const App = createAppContainer(RootStack);
export default App;
