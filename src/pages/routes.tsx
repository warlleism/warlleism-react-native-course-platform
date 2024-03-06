import CustomTabBar from '../components/CustomTabBar';
import HomeScreen from '../screens/homeScreen';
import OtherScreen from '../screens/otherScreen';
import ProgressScreen from '../screens/progressScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#121212",

            tabBarStyle:{
                borderTopWidth: 0,
                backgroundColor: "#fff"
            }
        }}

        tabBar={(props)=> <CustomTabBar {...props} />}
        >
            <Tab.Screen
            options={{
                tabBarIcon: "home"
            }} 
            name="Home" 
            component={HomeScreen} />
            <Tab.Screen
            options={{
                tabBarIcon: "book"
            }} 
            name="Other" 
            component={OtherScreen} />
            <Tab.Screen
            options={{
                tabBarIcon: "bars-progress"
            }} 
            name="Progress" 
            component={ProgressScreen} />
        </Tab.Navigator>
    )
}
