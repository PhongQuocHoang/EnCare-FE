import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import RegisterScreen from './screen/RegisterScreen';
import LoginScreen from './screen/LoginScreen';
import ForgotPassScreen from './screen/ForgotPassScreen';
import ResetPassScreen from './screen/ResetPassScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                {/* <Stack.Screen name="ForgotPassScreen" component={ForgotPassScreen} /> */}
                {/* <Stack.Screen name="ResetPassScreen" component={ResetPassScreen} />   */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
