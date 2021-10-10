import React, { Component } from 'react';
import { ScrollView, View, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import { Surface, Button, List, Title, Headline, Searchbar } from 'react-native-paper';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import WrapWrap from '../components/WrapWrap';

const ProductsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <WrapWrap>
            <FocusAwareStatusBar />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: StatusBar.currentHeight,
                    //paddingTop: 10,
                }}
            >
                <Searchbar
                    placeholder="Search Products"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{
                        //elevation: 5,
                        borderWidth: 0.5,
                        borderColor: 'lightgray',
                        borderRadius: 5,
                        marginTop: 20,
                    }}
                />

                <List.Section title="Crockery">
                    <List.Accordion
                        title="Bowls"
                        left={props => <List.Icon {...props} icon="circle" />}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Plates"
                        left={props => <List.Icon {...props} icon="bowl" />}
                    //expanded={expanded}
                    //onPress={handlePress}
                    >
                        <View>
                            <Title>show plates here</Title>
                        </View>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Trays"
                        left={props => <List.Icon {...props} icon="tray" />}
                    //expanded={expanded}
                    //onPress={handlePress}
                    >
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Glasses"
                        left={props => <List.Icon {...props} icon="glass-pint-outline" />}
                    //expanded={expanded}
                    //onPress={handlePress}
                    >
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Spoons"
                        left={props => <List.Icon {...props} icon="silverware-spoon" />}
                    //expanded={expanded}
                    //onPress={handlePress}
                    >
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                </List.Section>

                <List.Section title="Dinner Sets">
                    <List.Accordion
                        title="Melamine"
                        left={props => <List.Icon {...props} icon="circle" />}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Acrylic"
                        left={props => <List.Icon {...props} icon="bowl" />}
                    >
                        <View>
                            <Title>show plates here</Title>
                        </View>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="PVC"
                        left={props => <List.Icon {...props} icon="tray" />}
                    >
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                </List.Section>

            </ScrollView>
        </WrapWrap>
    )
}

export default ProductsScreen;