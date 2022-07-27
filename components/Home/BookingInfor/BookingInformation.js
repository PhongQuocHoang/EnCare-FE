import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Animated,
    Platform,
} from 'react-native';

import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDoctorId } from '../../../apis/getApis';
import DatePicker from 'react-native-date-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import RNDateTimePicker from '@react-native-community/datetimepicker';

const BookingInformation = ({ navigation }) => {
    const [symptom, setSymptom] = useState('');

    const [datas, setDatas] = useState([]);
    const [namePaitent, setNamePatient] = useState('');
    const [idDoc, setIdDoc] = useState('');

    const [date, setDate] = useState(new Date());
    const [datePicker, setDatePicker] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));
    const [TimePicker, setTimePicker] = useState(false);

    const [open, setOpen] = useState(false);

    const showDatePicker = () => {
        setDatePicker(true);
    };
    const showDatePicker2 = () => {
        setDatePicker(false);
    };
    const showTimePicker = () => {
        setTimePicker(true);
    };
    const onDateSelected = (event, value) => {
        setDate(value);
        setDatePicker(true);
    };
    const onTimeSelected = (event, value) => {
        setTime(value);
        setTimePicker(true);
    };

    useEffect(() => {
        AsyncStorage.getItem('IdDoctor').then((result) => {
            setIdDoc(result);
        });
        AsyncStorage.getItem('NamePatient').then((result) => {
            setNamePatient(result);
        });
        getDoctorId(setDatas, idDoc);
    }, [idDoc]);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <SafeAreaView style={{ height: 150, backgroundColor: '#6AE0D9' }}>
                <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => navigation.goBack('HomeScreen')}
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
                            style={{ height: 60, width: 60, borderRadius: 90, left: 5 }}
                        ></Image>
                        <View style={{ height: 80, left: 28, justifyContent: 'center' }}>
                            <Text style={{ padding: 10 }}>Patient</Text>
                            <Text style={{ paddingLeft: 10, fontWeight: '700' }}>{namePaitent}</Text>
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
                            <Text style={{ marginLeft: 10, fontWeight: '700' }}>
                                Dr. {datas?.accountResponse?.name}
                            </Text>
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
                            <Text style={{ marginLeft: 10, fontWeight: '700' }}>{datas?.hospitalResponse?.name}</Text>
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
                        <View style={{ height: 80, left: 54, justifyContent: 'center' }}>
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

                        <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                            {/* ngay book lich */}
                            <Text>Select Date</Text>
                            <DatePicker modal date={date} mode="date" open={open} />
                            <TouchableOpacity onPress={() => setOpen(true)}>
                                <Text>Test</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ marginLeft: 15 }}>Time</Text>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                                {/* thoi gian book lich */}
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
