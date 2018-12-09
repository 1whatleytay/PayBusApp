import AsyncStorage from 'react-native'

import {createStackNavigator, createAppContainer} from 'react-navigation'

import EntryScreen from "./ReactNativeViews/EntryScreen";
import RouteScreen from "./ReactNativeViews/RouteScreen"
import ProfileScreen from "./ReactNativeViews/ProfileScreen"
import HomeScreen from "./ReactNativeViews/HomeScreen"
import LoginScreen from "./ReactNativeViews/LoginScreen"

// console.disableYellowBox = true

const RootStack = createStackNavigator({


    Entry: {
        screen: EntryScreen
    },
    Home:{
        screen:HomeScreen
    },
    Login: {
        screen: LoginScreen
    },
    Route: {
        screen: RouteScreen
    },
    Profile: {
        screen: ProfileScreen
    }
});


const App = createAppContainer(RootStack);
export default App;
