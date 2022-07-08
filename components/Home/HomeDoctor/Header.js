import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';

const Header = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapperHeader}>
                <View style={styles.infor}>
                    <Image
                        source={{
                            uri: 'https://static2.yan.vn/YanNews/2167221/202110/zayn-malik-la-ai-thong-tin-tieu-su-ban-trai-gigi-hadid-fc8f2fd5.jpg',
                        }}
                        style={styles.iconn0}
                    />
                    <Text style={styles.name}>Hi, Ollie</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.nofiticationIcon}>
                        <View style={styles.w_iconNofiti}>
                            <Image
                                source={{
                                    uri: 'https://img.icons8.com/fluency-systems-regular/40/ffffff/appointment-reminders--v1.png',
                                }}
                                style={styles.iconn1}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6AE0D9',
    },
    wrapperHeader: {
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        marginLeft: 20,
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    infor: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nofiticationIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconn0: {
        height: 60,
        width: 60,
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 14,
    },
    w_iconNofiti: {
        padding: 8,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 14,
    },
    iconn1: {
        height: 20,
        width: 20,
        // padding: 20,
        // position: 'absolute',
    },
});
export default Header;
