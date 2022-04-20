import React, { useState, useEffect } from 'react'
import { View, StatusBar, Platform, StyleSheet, Image, ActivityIndicator, ImageBackground, SafeAreaView } from 'react-native';
const SplashScreen = ({ navigation }) => {
    const [animating, setAnimating] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('LoginScreen');
        },5000)
    },[])
    return (
        //State for activityIndicator animation
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }} resizeMode='cover' source={require('../images/splash.png')}>
                <View style={styles.contentCenter}>
                    <Image
                        source={require('../images/dede.png')}
                        style={{ marginTop: 100, width: 300, height: 300 }}
                    />
                    <Image source={require('../images/welcome.png')} style={{ marginTop: 50 }} />
                </View>

                <ActivityIndicator
                    animating={animating}
                    color="#FFFFFF"
                    size="large"
                    style={styles.activityIndicator}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        padding: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        padding: 10,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },
});
export default SplashScreen