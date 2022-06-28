import {
    View,
    Text,
    Keyboard,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    ScrollView,
} from 'react-native';
import React from 'react';

const IMAGE_BACKGROUND = require('../../assets/image/login_background.png');
const IMAGE_TITLELOGIN = require('../../assets/image/image_title_login.jpeg');

const RegisterForm = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');
    const [text, onChangeText] = React.useState('');

    return (
        <ImageBackground style={styles.backgroundImg} source={IMAGE_BACKGROUND}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    {/*  */}
                    <View style={styles.w_Title}>
                        <Text style={styles.title}>Welcom Onboard!</Text>
                        <Text>Let us take care of your health</Text>
                    </View>

                    {/*  */}
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.w_Input}
                    >
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.w_Input}>
                                <View style={styles.boxInput}>
                                    <TextInput
                                        style={styles.inputUser}
                                        onChangeText={onChangeNumber}
                                        value={text}
                                        placeholder="Enter your full name"
                                    />
                                    <TextInput
                                        style={styles.inputUser}
                                        onChangeText={onChangeNumber}
                                        value={number}
                                        placeholder="Enter phone number"
                                        keyboardType="numeric"
                                    />
                                    <TextInput
                                        style={styles.inputUser}
                                        onChangeText={onChangeText}
                                        value={text}
                                        placeholder="Enter Password"
                                        secureTextEntry={true}
                                    />
                                    <TextInput
                                        style={styles.inputUser}
                                        onChangeText={onChangeText}
                                        value={text}
                                        placeholder="Comfirm Password"
                                        secureTextEntry={true}
                                    />
                                </View>
                                <View style={styles.w_BtnRegister}>
                                    <TouchableOpacity style={styles.btn_Register}>
                                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
                                            Register
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    {/*  */}
                    <View style={styles.w_SignIn}>
                        <View style={styles.alreadyHaveAcc}>
                            <Text>Already have an account?</Text>

                            <TouchableOpacity onPress={() => navigation.goBack('LoginScreen')}>
                                <Text style={{ color: '#50C2C9', fontWeight: '700', fontSize: 14 }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: '100%',
        sresizeMode: 'cover',
    },
    container: {
        flex: 1,
    },
    w_Title: {
        marginTop: 25,
        height: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
        fontWeight: '600',
        fontSize: 19,
        lineHeight: 40,
        letterSpacing: 2,
    },
    w_Input: {
        height: '65%',
        alignItems: 'center',
    },
    boxInput: {
        paddingTop: 30,
    },
    inputUser: {
        width: 280,
        height: 50,
        fontSize: 13,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderRadius: 23,
        backgroundColor: 'rgba(106, 224, 217, 0.2)',
    },
    w_BtnRegister: {
        marginTop: 95,
    },
    btn_Register: {
        width: 280,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(80, 194, 201, 1)',
    },
    w_SignIn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    alreadyHaveAcc: {
        flexDirection: 'row',
    },
});

export default RegisterForm;
