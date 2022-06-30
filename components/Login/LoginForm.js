import {
    View,
    Text,
    Keyboard,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    ScrollView,
} from 'react-native';
import callApi from '../../apis/axiosClient';
import { Formik } from 'formik';
import React from 'react';
import { validateSchema } from '../validateSchema';
const IMAGE_BACKGROUND = require('../../assets/image/login_background.png');
const IMAGE_TITLELOGIN = require('../../assets/image/image_title_login.jpeg');

const LoginForm = ({ navigation }) => {
    const onLogin = async (phoneNumber, password) => {
        await callApi('login', 'post', {
            phone: phoneNumber,
            password: password,
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log('thatbai', error);
            });
    };

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
                            <Formik
                                initialValues={{ phone: '', pass: '' }}
                                // onSubmit={() => {}}
                                validationSchema={validateSchema}
                                validateOnMount={true}
                            >
                                {({ handleChange, handleBlur, values, errors, touched }) => (
                                    <>
                                        <View style={styles.boxInput}>
                                            <View style={{ alignItems: 'center' }}>
                                                <TextInput
                                                    style={styles.inputUser}
                                                    onBlur={handleBlur('phone')}
                                                    onChangeText={handleChange('phone')}
                                                    value={values.phone}
                                                    placeholder="Enter phone number"
                                                    keyboardType="numeric"
                                                />
                                                {errors.phone && touched.phone ? (
                                                    <Text
                                                        style={{
                                                            color: 'red',
                                                            fontSize: 12,
                                                            bottom: 10,
                                                        }}
                                                    >
                                                        {errors.phone}
                                                    </Text>
                                                ) : null}
                                            </View>
                                            <View style={{ alignItems: 'center' }}>
                                                <TextInput
                                                    style={styles.inputUser}
                                                    onBlur={handleBlur('pass')}
                                                    onChangeText={handleChange('pass')}
                                                    value={values.pass}
                                                    placeholder="Password"
                                                    secureTextEntry={true}
                                                />
                                                {errors.pass && touched.pass ? (
                                                    <Text style={{ color: 'red', fontSize: 12, bottom: 10 }}>
                                                        {errors.pass}
                                                    </Text>
                                                ) : null}
                                            </View>
                                            <View style={styles.forgot_Login}>
                                                <TouchableOpacity
                                                    style={styles.forgotPass}
                                                    onPress={() => navigation.push('ForgotPassScreen')}
                                                >
                                                    <Text style={{ color: '#50C2C9', fontSize: 14 }}>
                                                        Forgot Password
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={styles.btn_Login}
                                                    onPress={() => onLogin(values.phone, values.pass)}
                                                >
                                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
                                                        Login
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </>
                                )}
                            </Formik>
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
        alignItems: 'center',
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
