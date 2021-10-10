import React, { Component } from 'react';
import { Image, StatusBar, View, Text, StyleSheet } from 'react-native';
import { Button, } from 'react-native-elements';
import { Surface } from 'react-native-paper';
import { PRIMARY_COLOR, screenHeight, screenWidth } from '../constants';

const SplashScreen = () => {

    return (
        <Surface>
            <StatusBar barStyle="dark-content" translucent backgroundColor='transparent' />
            {/* <Image
                style={{
                    width: screenWidth,
                }}
                source={require('../assets/splash.jpg')}
            /> */}

            <View style={{
                position: 'absolute',
                alignSelf: 'center',
                top: screenHeight * 0.35,
                borderColor: 'white', borderWidth: 0
            }}>
                <Image
                    source={require('../assets/bi_logo.png')}
                    style={styles.logo}
                />
                <View
                    style={styles.text_container}
                >
                    <Text style={styles.bharat}>Bharat </Text>
                    <Text style={styles.industries}>INDUSTRIES</Text>
                </View>

                <Text
                    style={styles.qualityAssured}
                >Quality Assured, Always</Text>
            </View>
        </Surface>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    logo: {
        height: 90,
        width: 90,
        alignSelf: 'center'
    },
    text_container: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
    },
    bharat: {
        fontFamily: 'Milk Script Regular',
        fontSize: 48,
        color: 'red'
    },
    industries: {
        fontFamily: 'arial',
        fontSize: 32,
        marginTop: 10,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
    },
    qualityAssured: {
        fontSize: 20,
        fontFamily: 'arial',
        alignSelf: 'center',
    },

})