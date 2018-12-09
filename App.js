import {createStackNavigator, createAppContainer} from 'react-navigation'

import EntryScreen from "./ReactNativeViews/EntryScreen"
import RouteScreen from "./ReactNativeViews/RouteScreen"
import NewRouteScreen from "./ReactNativeViews/NewRouteScreen"
import HomeScreen from "./ReactNativeViews/HomeScreen"
import LoginScreen from "./ReactNativeViews/LoginScreen"
import AskBus from "./ReactNativeViews/AskBus"

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
    NewRoute: {
        screen: NewRouteScreen
    },
    AskBus: {
        screen: AskBus
    }
});


const App = createAppContainer(RootStack);
export default App;
