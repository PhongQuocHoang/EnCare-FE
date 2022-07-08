import { View, Text } from 'react-native';
import React from 'react';
import ListCategogy from '../components/Home/ListCategory/ListCategogy';

const ListCategoryScreen = ({ navigation }) => {
    return <ListCategogy list={navigation} />;
};

export default ListCategoryScreen;
