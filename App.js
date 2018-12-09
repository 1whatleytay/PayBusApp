import AsyncStorage from 'react-native'

import {createStackNavigator, createAppContainer} from 'react-navigation'

import EntryScreen from "./ReactNativeViews/EntryScreen";
import RouteScreen from "./ReactNativeViews/RouteScreen"
import ProfileScreen from "./ReactNativeViews/ProfileScreen"
import HomeScreen from "./ReactNativeViews/HomeScreen"
import LoginScreen from "./ReactNativeViews/LoginScreen"
import NewRouteScreen from "./ReactNativeViews/NewRouteScreen"

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
    Profile: {
        screen: ProfileScreen
    },
    Route: {
        screen: RouteScreen
    },
    NewRoute: {
        screen: NewRouteScreen
    }
});


const App = createAppContainer(RootStack);
export default App;
