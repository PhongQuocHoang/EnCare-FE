import * as React from 'react';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        // <LoginScreen />
    );
}
