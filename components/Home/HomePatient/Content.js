import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import callApi from '../../../apis/axiosClient';
import { getListDoctor, getListCategory } from '../../../apis/getApis';

const Category = [
    {
        name: 'Heart',
        categoryIcon: 'https://img.icons8.com/pastel_glyph/40/07AEB8/hearts----v2.png',
    },
    {
        name: 'Bone',
        categoryIcon: 'https://img.icons8.com/ios7/40/07AEB8/dog-bone.png',
    },
    {
        name: 'Dentist',
        categoryIcon: 'https://img.icons8.com/ios11/40/07AEB8/tooth.png',
    },
    {
        name: 'More',
        categoryIcon: 'https://img.icons8.com/m_outlined/40/07AEB8/more.png',
    },
];

const Content = ({ navigation }) => {
    const [datas, setDatas] = useState([]);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.search}>
                <Text style={styles.text}>Find a service or doctor</Text>
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
            <View style={styles.content}>
                <View style={styles.banner}>
                    <Image
                        source={{
                            uri: 'https://www.rheumatology.org/portals/0/Images/Health%20Care%20Team/Patient-Role.jpg',
                        }}
                        style={styles.imgBanner}
                    />
                </View>
                <View style={styles.category}>
                    <Text style={{ fontSize: 17, fontWeight: '600' }}>Category</Text>

                    <View style={styles.w_category}>
                        {Category.map((icon, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.w_icon}
                                onPress={() =>
                                    // (icon.categoryId === 1 ? navigation.navigate('ListDoctorScreen') : null)

                                    icon === 'More'
                                        ? navigation.push('ListDoctorScreen')
                                        : navigation.push('ListCategoryScreen')
                                }
                            >
                                <Image source={{ uri: icon.categoryIcon }} style={styles.iconn} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={{ maxHeight: 250 }}>
                    <TouchableOpacity onPress={() => navigation.push('BookingScreen')}>
                        <Text style={{ fontSize: 17, fontWeight: '600' }}>Upcomming Appointment</Text>
                    </TouchableOpacity>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* Call api lịch khám và để một cái banner nếu ko có lịch */}
                        <View style={styles.viewAppointment}>
                            <Image
                                style={styles.avatarD}
                                source={{
                                    uri: 'https://www.meme-arsenal.com/memes/3e2b481b680239a88fcb3ff4e3744f51.jpg',
                                }}
                            />
                            <View style={styles.inforApppointment}>
                                <View style={{ flex: 0.65 }}>
                                    <Text style={{ fontSize: 13, fontWeight: '600' }}>Dr. Hoang Quoc Phong</Text>
                                    <Text style={{ fontSize: 13 }}>Bác sĩ Tim mạch</Text>
                                    <Text style={{ fontSize: 12, flexWrap: 'wrap' }}>
                                        124 Hải Phòng, Thạch Thang, Hải Châu, Đà Nẵng
                                    </Text>
                                </View>
                                <View style={{ flex: 0.35, alignItems: 'flex-end' }}>
                                    <Image
                                        style={{ height: 20, width: 20 }}
                                        source={{
                                            uri: 'https://img.icons8.com/fluency-systems-regular/40/6AE0D9/planner.png',
                                        }}
                                    />
                                    <Text>20/07/2022</Text>
                                    <Text style={{ fontSize: 15, fontWeight: '600' }}>10:00 AM</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.favourite}>
                    <Text style={{ fontSize: 17, fontWeight: '600' }}>Favourite Dotor</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {/* call api danh sách bác sĩ ưu thích or tự tạo */}
                            <View
                                style={{
                                    padding: 10,
                                    backgroundColor: '#F4F3F3',
                                    marginRight: 10,
                                    borderRadius: 8,
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    style={styles.avatarFD}
                                    source={{
                                        uri: 'https://www.meme-arsenal.com/memes/3e2b481b680239a88fcb3ff4e3744f51.jpg',
                                    }}
                                />
                                <Text style={{ fontWeight: '500' }}>Dr. Tonny Stack</Text>
                                <Text>Da Nang, Viet Nam</Text>
                            </View>
                            <View
                                style={{
                                    padding: 10,
                                    backgroundColor: '#F4F3F3',
                                    marginRight: 10,
                                    borderRadius: 8,
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    style={styles.avatarFD}
                                    source={{
                                        uri: 'https://www.meme-arsenal.com/memes/3e2b481b680239a88fcb3ff4e3744f51.jpg',
                                    }}
                                />
                                <Text style={{ fontWeight: '500' }}>Dr. Tonny Stack</Text>
                                <Text>Da Nang, Viet Nam</Text>
                            </View>
                            <View
                                style={{
                                    padding: 10,
                                    backgroundColor: '#F4F3F3',
                                    marginRight: 10,
                                    borderRadius: 8,
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    style={styles.avatarFD}
                                    source={{
                                        uri: 'https://www.meme-arsenal.com/memes/3e2b481b680239a88fcb3ff4e3744f51.jpg',
                                    }}
                                />
                                <Text style={{ fontWeight: '500' }}>Dr. Tonny Stack</Text>
                                <Text>Da Nang, Viet Nam</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    wrapperContent: {},
    search: {
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 15,
        backgroundColor: '#6AE0D9',
    },
    content: {
        padding: 10,
    },
    text: {
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
        marginBottom: 15,
    },
    w_inputSearch: {},
    inputSearch: {
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
    banner: {
        paddingBottom: 15,
    },
    imgBanner: {
        width: '100%',
        height: 190,
        borderRadius: 15,
        resizeMode: 'cover',
    },
    category: {},
    w_category: {
        paddingTop: 5,
        paddingBottom: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    w_icon: {
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#F4F3F3',
    },
    iconn: {
        height: 40,
        width: 40,
    },
    viewAppointment: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: '#F4F3F3',
    },
    inforApppointment: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatarD: {
        height: 80,
        width: 80,
        marginRight: 15,
        borderRadius: 8,
    },
    avatarFD: {
        height: 120,
        width: 120,
        borderRadius: 8,
    },
});

export default Content;
