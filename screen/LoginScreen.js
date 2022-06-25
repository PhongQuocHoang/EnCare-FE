import React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import LoginForm from '../components/Login/LoginForm';

const LoginScreen = ({ navigation }) => {
    return <LoginForm navigation={navigation} />;
};

export default LoginScreen;
