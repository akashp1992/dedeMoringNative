import React from 'react'
import { Text, TextInput, Button, StyleSheet, View, Dimensions, ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-ico-social-icons-rounded';
const LoginScreen = ({ navigation }) => {
    const handleClick = () => {
        navigation.navigate('SignupScreen');
    }
    const dimensions = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }} resizeMode='cover' source={require('../images/splash.png')}>
                <View style={styles.contentCenter}>
                    <Image
                        source={require('../images/dede.png')}
                        style={{ marginTop: 0, width: 200, height: 200 }}
                    />
                    <Text style={styles.loginText}>Login</Text>
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput placeholderTextColor="#fff" style={styles.inputStyle} placeholder='Email' />

                </View>
                <View style={styles.SectionStyle}>
                    <TextInput placeholderTextColor="#fff" style={styles.inputStyle} placeholder='Password' />
                </View>
                <View style={styles.SectionStyle}>
                    <TouchableOpacity>
                        <Text style={styles.forgotStyle}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity style={styles.buttonLayoutStyle}>
                        <Text style={styles.buttonTextStyle}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLayoutStyle}>
                        <Text style={styles.buttonTextStyle} onPress={() => navigation.replace('SignupScreen')}>Signup</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomContainerStyle}>
                    <Text style={{ color: 'white' }}>Signup With Social Media</Text>
                    <View style={styles.bottomSocialStyle} >
                        <Icon width="40" height="40" name="facebook-logo" color="white" />
                        <Icon width="40" height="40" name="twitter-social-logotype" color="white" />
                        <Icon width="40" height="40" name="pinterest-social-logo" color="white" />
                        <Icon width="40" height="40" name="instagram-social-network-logo-of-photo-camera" color="white" />
                    </View>
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
    loginText: {
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
        marginBottom: 30,
        color: 'white',
        alignItems: 'center',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonStyle: {
        flexDirection: 'row',
        height: 60,
        marginTop: 0,
        marginLeft: 35,
        marginRight: 35,
        margin: 0,
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
    bottomContainerStyle: {
        marginTop: 150,
        margin: 10,
        flexDirection: 'column',
    },
    bottomSocialStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
        padding: 10,
        textAlign: 'center'
    },
    iconStyle: {
        width: 40,
        height: 40
    }

});

export default LoginScreen