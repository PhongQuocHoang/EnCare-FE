import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Header from '../components/Home/HomeDoctor/Header';
import Content, { Category } from '../components/Home/HomeDoctor/Content';
import BottomTab, { BottomTabIcon } from '../components/Home/HomeDoctor/BottomTabIcon';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Content navigation={Category} />
            <BottomTab icons={BottomTabIcon} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
});

export default HomeScreen;
