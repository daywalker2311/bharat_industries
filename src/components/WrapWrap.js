import React, { Component } from 'react';
import { Surface } from 'react-native-paper';

const WrapWrap = (props) => {

    return (
        <Surface
            style={{
                paddingHorizontal: 20,
                flex: 1,
            }}
        >
            {props.children}
        </Surface>
    )
}

export default WrapWrap;