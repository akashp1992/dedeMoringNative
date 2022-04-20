import React, { useState } from 'react'
import { Text, TextInput, Button, StyleSheet, View, Dimensions, ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-ico-social-icons-rounded';
import { RadioButton } from 'react-native-paper';
const SignupScreen = () => {
    const [checked, setChecked] = useState('male');
    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }} resizeMode='cover' source={require('../images/splash.png')}>
                <View style={styles.contentCenter}>
                    <Image
                        source={require('../images/dede.png')}
                        style={{ marginTop: 0, width: 200, height: 200 }}
                    />
                    <Text style={styles.signupText}>Signup</Text>
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput placeholderTextColor="#fff" style={styles.inputStyle} placeholder='Enter Your Email' />

                </View>
                <View style={styles.SectionStyle}>
                    <TextInput placeholderTextColor="#fff" style={styles.inputStyle} placeholder='Enter Your Password' />
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput placeholderTextColor="#fff" style={styles.inputStyle} placeholder='Enter Your Mobile No' />
                </View>
                <View>
                    <Text style={styles.RadioTitle}>Select Your Gender </Text>
                </View>
                <View style={styles.radioView}>
                    <Text style={{ color: 'white' }} onPress={() => setChecked('male')}>Male</Text>
                    <RadioButton
                        value="male"
                        uncheckedColor='white'
                        status={checked === 'male' ? 'checked' : 'unchecked'}
                        color="white"
                        onPress={() => setChecked('male')}
                    />

                    <Text style={{ color: 'white' }} onPress={() => setChecked('female')}>Female</Text>
                    <RadioButton
                        value="female"
                        color="white"
                        uncheckedColor='white'
                        status={checked === 'female' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('female')}
                    />
                </View>

                <View style={styles.buttonStyle}>

                    <TouchableOpacity style={styles.buttonLayoutStyle}>
                        <Text style={styles.buttonTextStyle}>Signup</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SectionStyle}>
                    <Text style={styles.forgotStyle}>If you already Member?</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity style={styles.buttonLayoutStyle}>
                        <Text style={styles.buttonTextStyle} onPress={() => navigation.replace('LoginScreen')}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    contentCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupText: {
        color: '#FFF',
        fontSize: 20
    },
    inputStyle: {
        height: 60,
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#fff',
        textAlign: 'center',
        color: '#fff', shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 60,
    },
    SectionStyle: {
        flexDirection: 'column',
        height: 60,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    forgotStyle: {
        height: 30,
        marginBottom: 0,
        color: 'white',
        alignItems: 'center',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonStyle: {
        flexDirection: 'column',
        height: 60,
        marginTop: 0,
        marginLeft: 35,
        marginRight: 35,
        margin: 0,
        textAlign: 'center',
        alignItems: 'center'
    },
    radioView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    RadioTitle: {
        margin: 10,
        marginBottom: 10,
        color: 'white',
        alignItems: 'center',
        textAlign: 'center'

    },
    buttonLayoutStyle: {
        height: 130,
        flex: 1,
        justifyContent: 'space-between',
        width: 150,
        color: 'white',
        padding: 12,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#fff',
        textAlign: 'center',
        color: '#fff', shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 60,
        margin: 5
    },
    buttonTextStyle: {
        textAlign: 'center',
        color: 'white',
    },

});

export default SignupScreen