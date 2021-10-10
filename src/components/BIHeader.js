import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { PRIMARY_COLOR } from '../constants';

const BIHeader = (props) => {

    return (
        <View
            style={styles.text_container}
        >
            <Image
                source={require('../assets/bi_logo.png')}
                style={styles.logo}
            />
            <Text style={styles.bharat}>Bharat </Text>
            <Text style={styles.industries}>INDUSTRIES</Text>
        </View>
    )
}

export default BIHeader;

const styles = StyleSheet.create({
    text_container: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
    },
    logo: {
        height: 40,
        width: 40,
    },
    bharat: {
        fontFamily: 'Milk Script Regular',
        fontSize: 30,
        color: 'red'
    },
    industries: {
        fontFamily: 'arial',
        fontSize: 22,
        marginTop: 10,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
})