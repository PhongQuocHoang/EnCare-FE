import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import RegisterScreen from './screen/RegisterScreen';
import LoginScreen from './screen/LoginScreen';
import ForgotPassScreen from './screen/ForgotPassScreen';
import ResetPassScreen from './screen/ResetPassScreen';
import ListCategoryScreen from './screen/ListCategoryScreen';
import ListDoctorScreen from './screen/ListDoctorScreen';
import InforDoctorScreen from './screen/InforDoctorScreen';
import BookingScreen from './screen/BookingScreen';
import ConfirmScreen from './screen/ConfirmScreen';
const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BookingScreen " screenOptions={screenOptions}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="ForgotPassScreen" component={ForgotPassScreen} />
                <Stack.Screen name="ResetPassScreen" component={ResetPassScreen} />
                <Stack.Screen name="ListCategoryScreen" component={ListCategoryScreen} />
                <Stack.Screen name="ListDoctorScreen" component={ListDoctorScreen} />
                <Stack.Screen name="InforDoctorScreen" component={InforDoctorScreen} />
                <Stack.Screen name="BookingScreen" component={BookingScreen} />
                <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
