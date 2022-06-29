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
import { Formik } from 'formik';
import { validateSchema } from '../../validation';

const IMAGE_BACKGROUND = require('../../assets/image/login_background.png');
const IMAGE_TITLELOGIN = require('../../assets/image/image_title_login.jpeg');

const RegisterForm = ({ navigation }) => {
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
                                <Formik
                                    initialValues={{ name: '', phone: '', pass: '', repass: '' }}
                                    validationSchema={validateSchema}
                                    onSubmit={(values) => console.log(values)}
                                >
                                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                        <>
                                            <View style={styles.boxInput}>
                                                <View>
                                                    <TextInput
                                                        style={styles.inputUser}
                                                        onChangeText={handleChange('name')}
                                                        onBlur={handleBlur('name')}
                                                        value={values.name}
                                                        placeholder="Enter your full name"
                                                    />
                                                    {errors.name && touched.name ? (
                                                        <Text style={{ color: 'red' }}>{errors.name}</Text>
                                                    ) : null}
                                                </View>
                                                <View>
                                                    <TextInput
                                                        style={styles.inputUser}
                                                        onChangeText={handleChange('phone')}
                                                        onBlur={handleBlur('phone')}
                                                        value={values.phone}
                                                        placeholder="Enter phone number"
                                                        keyboardType="numeric"
                                                    />
                                                    {errors.phone && touched.phone ? (
                                                        <Text style={{ color: 'red' }}>{errors.phone}</Text>
                                                    ) : null}
                                                </View>
                                                <View>
                                                    <TextInput
                                                        style={styles.inputUser}
                                                        onChangeText={handleChange('pass')}
                                                        onBlur={handleBlur('pass')}
                                                        value={values.pass}
                                                        placeholder="Enter Password"
                                                        secureTextEntry={true}
                                                    />
                                                    {errors.pass && touched.pass ? (
                                                        <Text style={{ color: 'red' }}>{errors.pass}</Text>
                                                    ) : null}
                                                </View>
                                                <View>
                                                    <TextInput
                                                        style={styles.inputUser}
                                                        onChangeText={handleChange('repass')}
                                                        onBlur={handleBlur('repass')}
                                                        value={values.repass}
                                                        placeholder="Comfirm Password"
                                                        secureTextEntry={true}
                                                    />
                                                    {errors.repass && touched.repass ? (
                                                        <Text style={{ color: 'red' }}>{errors.repass}</Text>
                                                    ) : null}
                                                </View>
                                                <View style={styles.w_BtnRegister}>
                                                    <TouchableOpacity
                                                        style={styles.btn_Register}
                                                        onPress={handleSubmit}
                                                    >
                                                        <Text
                                                            style={{ color: 'white', fontWeight: '600', fontSize: 16 }}
                                                            onPress={handleSubmit}
                                                        >
                                                            Register
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </>
                                    )}
                                    ;
                                </Formik>
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
