import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>HomeScreen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('LoginScreen')} />
        </SafeAreaView>
    );
};

export default HomeScreen;
