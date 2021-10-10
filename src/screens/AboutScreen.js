import React, { useEffect, useRef } from 'react';
import { Text, View, StatusBar, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import { Surface, Button, Chip, Title, Subheading, Paragraph, IconButton, TextInput } from 'react-native-paper';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import { PRIMARY_COLOR, screeWidth } from '../constants';
import WrapWrap from '../components/WrapWrap';
import BIHeader from '../components/BIHeader';


const AboutScreen = () => {

    const PHONE_NUM1 = '+918285316585';
    const PHONE_NUM2 = '+919310892111';
    return (
        <WrapWrap>
            <FocusAwareStatusBar />

            <View style={{
                marginTop: StatusBar.currentHeight,
            }}
            >
                <BIHeader />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    alwaysBounceVertical={true}
                    style={{
                        marginBottom: 80,
                        borderColor: 'black', borderWidth: 0,
                    }}>
                    <View style={styles.block_container}>
                        <Title>About Us</Title>
                        <Subheading>
                            We are the leading manufacturer of 100% PURE Melamine, Acrylic and Polycarbonate(PC) Crockery.
                            Established in 1990, completed 25 years of successful service throughout India.
                        </Subheading>
                        <Subheading>
                            {'\n'}Specializing in Hotel-ware, Dinner-sets and Domestic range of products and gift items.
                        </Subheading>
                    </View>

                    <View style={styles.block_container}>
                        <Title>
                            Need more information about our products ?
                        </Title>
                        <Subheading> We are happy to be of assistance, feel free to contact us to answer any related questions or provide with cost estimates on bulk orders.</Subheading>

                        <Chip
                            icon="phone"
                            onPress={() => { Linking.openURL(`tel:${PHONE_NUM1}`) }}
                            style={styles.contact_chip}
                        >
                            {PHONE_NUM1}
                        </Chip>

                        <Chip
                            icon="phone"
                            onPress={() => { Linking.openURL(`tel:${PHONE_NUM2}`) }}
                            style={styles.contact_chip}
                        >
                            {PHONE_NUM2}
                        </Chip>

                        <Button icon="email"
                            uppercase={false}
                            color={PRIMARY_COLOR}
                            onPress={() => {
                                Linking.openURL('mailto:bharatindustries1991@gmail.com?subject=Enquiry about products')
                            }}
                        >bharatindustries1991@gmail.com</Button>

                    </View>

                    <View style={styles.block_container}>
                        <Title>Send Enquiry</Title>
                        <Subheading>Fill in below form with questions and requested details and we will get back to you as soon as possible.</Subheading>
                    </View>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                            paddingBottom: 50,
                        }}>
                        <TextInput
                            placeholder="Name"
                            mode="flat"
                            style={styles.text_input}
                        />
                        <TextInput
                            placeholder="Contact number"
                            mode="flat"
                            style={styles.text_input}
                        />
                        <TextInput
                            placeholder="Write your question here"
                            mode="flat"
                            multiline={true}
                            style={styles.text_input_multi}
                        />
                        <Button
                            mode="outlined"
                            onPress={() => { console.log("send email") }}
                        >Send</Button>
                    </View>
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
    block_container: {
        marginVertical: 10,
    },
    text_input: {
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 0.5,
        marginVertical: 5,
        height: 60,
    },
    text_input_multi: {
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 0.5,
        marginVertical: 5,
    },
    contact_chip: {
        width: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        //backgroundColor: PRIMARY_COLOR,
        color: 'white',
        marginVertical: 7,
    }
})
export default AboutScreen;