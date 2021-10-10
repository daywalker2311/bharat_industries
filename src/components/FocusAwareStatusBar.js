import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Appearance } from 'react-native';
import { DarkTheme, DefaultTheme } from 'react-native-paper';

function FocusAwareStatusBar(props) {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
        //console.log("user's having a dark theme rn <<<<<<<<<<");
        const isFocused = useIsFocused();
        return isFocused ? <StatusBar barStyle="light-content" backgroundColor='#272627' {...props} /> : null;
    } else {
        //console.log("user's having a light theme rn <<<<<<<<<<");
        const isFocused = useIsFocused();
        return isFocused ? <StatusBar barStyle="dark-content" translucent backgroundColor='white' {...props} /> : null;
    }
}

export default FocusAwareStatusBar;
