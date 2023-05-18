import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Start from "./Pages/Start";
import Calendar from "./Pages/Calendar";

const Stack = createNativeStackNavigator();
export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Start"} screenOptions={{headerShown: false}}>
                <Stack.Screen name="Start" component={Start}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Calendar" component={Calendar}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}