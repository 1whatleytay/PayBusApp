import AsyncStorage from 'react-native'

import {createStackNavigator, createAppContainer} from 'react-navigation'

import Main from "./RoutingFolder/Main";
import NewRouteScreen from "./RoutingFolder/NewRouteScreen";

// console.disableYellowBox = true

const RootStack = createStackNavigator({
    Main: {
        screen: Main
    },
    RouteScreen: {
        screen: NewRouteScreen
    }
});


const App = createAppContainer(RootStack);
export default App;
