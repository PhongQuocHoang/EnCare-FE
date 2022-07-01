// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { Divider } from 'react-native-elements';

// export const BottomTabIcon = [
//     {
//         name: 'Home',
//         active: '../../assets/icon/activeHomeIcon.png',
//         inactive: '../../assets/icon/inactiveHomeIcon.png',
//     },
//     {
//         name: 'Appointment',
//         active: '../../assets/icon/activeHomeIcon.png',
//         inactive: '../../assets/icon/inactiveHomeIcon.png',
//     },
//     {
//         name: 'Message',
//         active: '../../assets/icon/activeHomeIcon.png',
//         inactive: '../../assets/icon/inactiveHomeIcon.png',
//     },
//     {
//         name: 'Profile',
//         active: '../../assets/icon/activeHomeIcon.png',
//         inactive: '../../assets/icon/inactiveHomeIcon.png',
//     },
// ];

// const BottomTab = ({ icons }) => {
//     const [activeTab, setActiveTab] = useState('Home');

//     const Icon = ({ icon }) => (
//         <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
//             <Image
//                 source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
//                 style={[
//                     styles.icon,
//                     icon.name === 'Profile' ? styles.profileTab() : null,
//                     activeTab === icon.name && icon.name === 'Profile' ? styles.profileTab(activeTab) : null,
//                 ]}
//             />
//         </TouchableOpacity>
//     );
//     return (
//         <View style={styles.wrapper}>
//             <Divider width={1} orientation="vertical" />
//             <View style={styles.container}>
//                 {icons.map((icon,index)) => (
//                     <Icon key={index} icon={icon} />
//                 ))}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     wrapper: {
//         position: 'absolute',
//         bottom: '3%',
//         // backgroundColor: '#000',
//         zIndex: 999,
//         width: '100%',
//     },
//     container: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         paddingTop: 10,
//         height: 40,
//     },
//     icon: {
//         width: 30,
//         height: 30,
//     },
//     profileTab: (activeTab = '') => ({
//         borderRadius: 50,
//         borderWidth: activeTab === 'Profile' ? 2 : 0,
//         borderColor: '#FF8501',
//     }),
// });

// export default BottomTab;
