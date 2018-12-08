import RouteOption from "./ReactNativeViews/RouteOptions";
import ProfileScreen from "./ReactNativeViews/ProfileScreen";
import HomeScreen from "./ReactNativeViews/HomeScreen";

const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen
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
