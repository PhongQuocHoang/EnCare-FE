import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const listCategogy = ['clinic 1', 'clinic 2', 'clinic 3', 'clinic 4'];

const ListCategogy = ({ list }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    );
};
const Header = ({ list }) => {
    return (
        <View style={styles.search}>
            <Text style={styles.text}>Find a category </Text>
            <View style={styles.w_inputSearch}>
                <TextInput
                    style={styles.inputSearch}
                    placeholder="Search"
                    placeholderTextColor="white"
                    autoCorrect={false}
                />
                <TouchableOpacity style={styles.w_iconSearch}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/fluent-systems-filled/40/07AEB8/search.png' }}
                        style={styles.iconSearch}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6AE0D9',
    },
    search: {
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 15,
        alignItems: 'center',
        backgroundColor: '#6AE0D9',
    },
    text: {
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
        marginBottom: 5,
    },

    w_inputSearch: {},
    inputSearch: {
        minWidth: '100%',
        height: 46,
        paddingLeft: 20,
        borderRadius: 14,
        backgroundColor: 'rgba(255, 253, 253, 0.45)',
    },
    w_iconSearch: {
        height: 46,
        width: 46,
        right: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
    },
    iconSearch: {
        height: 27,
        width: 27,
    },
});

export default ListCategogy;
