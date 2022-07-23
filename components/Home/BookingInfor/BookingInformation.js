import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

const days = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
];
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const years = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'];
const times = ['8:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const BookingInformation = ({ navigation }) => {
    const [symptom, setSymptom] = useState('');
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <SafeAreaView style={{ height: 150, backgroundColor: '#6AE0D9' }}>
                <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => navigation.goBack('InforDoctorScreen')}
                    >
                        <Ionicons name="chevron-back-outline" color="#121212" size={30}></Ionicons>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>Booking Information</Text>
                </View>
            </SafeAreaView>
            {/* content */}
            <ScrollView>
                <View style={{ padding: 10 }}>
                    <View
                        style={{
                            width: '100%',
                            backgroundColor: '#e9e7e7',
                            borderRadius: 8,
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}
                    >
                        <Image
                            source={{ uri: 'https://www.meme-arsenal.com/memes/3e2b481b680239a88fcb3ff4e3744f51.jpg' }}
                            style={{ height: 60, width: 60, borderRadius: 90, left: 16 }}
                        ></Image>
                        <View style={{ height: 80, left: 38, justifyContent: 'center' }}>
                            <Text style={{ padding: 10 }}>Patient</Text>
                            <Text style={{ paddingLeft: 10, fontWeight: '700' }}>NGUYEN THANH DUONG</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#e9e7e7',
                            borderRadius: 8,
                            marginTop: 6,
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}
                    >
                        <View style={{ left: 16 }}>
                            <Ionicons name="heart-circle-outline" size={40} color="#00C7C7"></Ionicons>
                        </View>
                        <View style={{ height: 80, left: 48, justifyContent: 'center' }}>
                            <Text style={{ padding: 10 }}>Doctor</Text>
                            <Text style={{ marginLeft: 10, fontWeight: '700' }}>Dr. Nguyen Minh Chau</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#e9e7e7',
                            borderRadius: 8,
                            marginTop: 6,
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}
                    >
                        <View style={{ left: 16 }}>
                            <Ionicons name="location-outline" size={40} color="#00C7C7"></Ionicons>
                        </View>
                        <View style={{ height: 80, left: 48, justifyContent: 'center' }}>
                            <Text style={{ padding: 10 }}>Hospital/Clinic</Text>
                            <Text style={{ marginLeft: 10, fontWeight: '700' }}>Phòng khám Vinmec Đà Nẵng</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#e9e7e7',
                            borderRadius: 8,
                            marginTop: 6,
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}
                    >
                        <View style={{ left: 16 }}>
                            <Ionicons name="receipt-outline" size={35} color="#00C7C7"></Ionicons>
                        </View>
                        <View style={{ height: 80, left: 48, justifyContent: 'center' }}>
                            <Text style={{ padding: 10 }}>Service</Text>
                            <Text style={{ marginLeft: 10, fontWeight: '700' }}>Hello hello</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            maxHeight: 150,
                            backgroundColor: '#e9e7e7',
                            borderRadius: 8,
                            marginTop: 6,
                            padding: 10,
                        }}
                    >
                        <Text style={{ paddingBottom: 5 }}>Choose Datetime</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 10 }}>
                            <View>
                                <Text>Day</Text>
                                <SelectDropdown
                                    buttonStyle={styles.inputUser1}
                                    defaultButtonText="1"
                                    data={days}
                                    dropdownStyle={styles.dropDownStyle}
                                    // selectedRowStyle={styles.selectedText}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                />
                            </View>
                            <View>
                                <Text>Month</Text>
                                <SelectDropdown
                                    buttonStyle={styles.inputUser1}
                                    defaultButtonText="1"
                                    data={months}
                                    dropdownStyle={styles.dropDownStyle}
                                    // selectedRowStyle={styles.selectedText}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                />
                            </View>
                            <View>
                                <Text>Year</Text>
                                <SelectDropdown
                                    buttonStyle={styles.inputUser1}
                                    defaultButtonText="2022"
                                    data={years}
                                    dropdownStyle={styles.dropDownStyle}
                                    // selectedRowStyle={styles.selectedText}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{ marginLeft: 15 }}>Time</Text>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                                <SelectDropdown
                                    buttonStyle={styles.inputUser1}
                                    defaultButtonText="8:00"
                                    data={times}
                                    dropdownStyle={styles.dropDownStyle}
                                    // selectedRowStyle={styles.selectedText}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                />
                                <SelectDropdown
                                    buttonStyle={styles.inputUser1}
                                    defaultButtonText="9:00"
                                    data={times}
                                    dropdownStyle={styles.dropDownStyle}
                                    // selectedRowStyle={styles.selectedText}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                />
                                <SelectDropdown
                                    buttonStyle={styles.inputUser1}
                                    defaultButtonText="10:00"
                                    data={times}
                                    // selectedRowStyle={styles.selectedText}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 150, backgroundColor: '#e9e7e7', borderRadius: 8, marginTop: 6 }}>
                        <View style={{ left: 9, flexDirection: 'row', top: 8 }}>
                            <Ionicons name="reader-outline" size={30} color="#00C7C7"></Ionicons>
                            <Text style={{ top: 8 }}>Symptoms</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <TextInput
                                height={100}
                                paddingLeft={10}
                                paddingRight={10}
                                multiline={true}
                                numberOfLines={4}
                                backgroundColor="white"
                                value={symptom}
                                onChangeText={(text) => setSymptom(text)}
                                placeholder={'Enter your symptoms here!'}
                                keyboardType="default"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <SafeAreaView style={{ margin: 10 }}>
                <TouchableOpacity
                    style={{
                        height: 50,
                        backgroundColor: '#50C2C9',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.push('ConfirmScreen')}
                >
                    <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Confirm</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    inputUser1: {
        width: 60,
        height: 30,
        backgroundColor: 'white',
        borderColor: '#949191',
        borderWidth: 1,
        borderRadius: 8,
    },
    inputUser1: {
        width: 80,
        height: 30,
        backgroundColor: 'white',
        borderColor: '#949191',
        borderWidth: 1,
        borderRadius: 8,
    },
    selectedText: {
        width: 80,
        height: 30,
        fontSize: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255,1)',
    },
    viewTime: {
        width: 60,
        height: 30,
        fontSize: 10,
        // marginBottom: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#00C7C7',
        backgroundColor: 'white',
        // right: 21,
    },
});

export default BookingInformation;
