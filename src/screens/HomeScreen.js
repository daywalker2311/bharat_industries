import React, { useEffect, useRef } from 'react';
import { Text, View, StatusBar, Image, StyleSheet, ScrollView } from 'react-native';
import { Surface, Button, Headline } from 'react-native-paper';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import Carousel from 'react-native-snap-carousel';
import { PRIMARY_COLOR, screeWidth } from '../constants';
import WrapWrap from '../components/WrapWrap';
import BIHeader from '../components/BIHeader';
const HomeScreen = () => {
    const carouselRef = useRef();

    const carouselItems = [
        {
            title: "Item 1",
            text: "Text 1",
        },
        {
            title: "Item 2",
            text: "Text 2",
        },
        {
            title: "Item 3",
            text: "Text 3",
        },
        {
            title: "Item 4",
            text: "Text 4",
        },
        {
            title: "Item 5",
            text: "Text 5",
        },
    ]
    const renderItem = ({ item, index }) => {
        return (
            <View
                style={styles.slide}
            >
                <Text
                //style={styles.title}
                >{item.title}</Text>
            </View>
        );
    }

    return (
        <WrapWrap>
            <FocusAwareStatusBar />

            <View style={{
                marginTop: StatusBar.currentHeight,
                borderColor: 'black', borderWidth: 0
            }}
            >
                <BIHeader />

                <ScrollView>
                    <Carousel
                        ref={carouselRef}
                        data={carouselItems}
                        renderItem={renderItem}
                        sliderWidth={400 - 20}
                        itemWidth={screeWidth - 50}
                        loop={true}
                        //autoplay={true}
                        autoplayInterval={3000}
                    />
                </ScrollView>
            </View>
        </WrapWrap>
    )
}

const styles = StyleSheet.create({
    slide: {
        borderColor: 'lightgray',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginTop: 30,
    },

})
export default HomeScreen;