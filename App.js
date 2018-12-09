import AsyncStorage from 'react-native'

import {createStackNavigator, createAppContainer} from 'react-navigation'

import EntryScreen from "./ReactNativeViews/EntryScreen";
import RouteOption from "./ReactNativeViews/RouteOptions"
import ProfileScreen from "./ReactNativeViews/ProfileScreen"
import HomeScreen from "./ReactNativeViews/HomeScreen"
import LoginScreen from "./ReactNativeViews/LoginScreen"

const RootStack = createStackNavigator({
    Entry: {
        screen: EntryScreen
    },
    Home: {
        screen: HomeScreen
    },
    Login: {
        screen: LoginScreen
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
