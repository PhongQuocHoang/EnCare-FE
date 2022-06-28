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

const LoginForm = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');
    const [text, onChangeText] = React.useState('');

    return (
        <ImageBackground style={styles.backgroundImg} source={IMAGE_BACKGROUND}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    {/*  */}

                    <View style={styles.w_Title}>
                        <Text style={styles.title}>Welcome to EnCare!</Text>
                        <Image style={styles.logoTitle} source={IMAGE_TITLELOGIN} />
                    </View>

                    {/*  */}
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.w_Input}
                    >
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                <View style={styles.boxInput}>
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
                                        placeholder="Password"
                                        secureTextEntry={true}
                                    />
                                    <View style={styles.forgot_Login}>
                                        <TouchableOpacity
                                            style={styles.forgotPass}
                                            onPress={() => navigation.push('ForgotPassScreen')}
                                        >
                                            <Text style={{ color: '#50C2C9', fontSize: 14 }}>Forgot Password</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn_Login}>
                                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
                                                Login
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    {/*  */}

                    <View style={styles.w_SignUp}>
                        <View style={styles.dontAcc}>
                            <Text>Don't have an account?</Text>

                            <TouchableOpacity onPress={() => navigation.push('RegisterScreen')}>
                                <Text style={{ color: '#50C2C9', fontWeight: '700', fontSize: 14 }}>Sign Up</Text>
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
    //
    w_Title: {
        marginTop: 25,
        height: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
        fontWeight: '600',
        fontSize: 23,
        lineHeight: 60,
        letterSpacing: 4,
    },
    logoTitle: {
        width: 260,
        height: 180,
        borderRadius: 14,
    },
    //
    w_Input: {
        height: '50%',
        alignItems: 'center',
    },
    boxInput: {
        paddingTop: 50,
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
    forgot_Login: {
        alignItems: 'center',
    },
    forgotPass: {
        marginTop: 30,
        marginBottom: 40,
    },
    btn_Login: {
        width: 280,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(80, 194, 201, 1)',
    },
    //
    w_SignUp: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dontAcc: {
        bottom: 30,
        flexDirection: 'row',
    },
});

export default LoginForm;
