import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProductsScreen from '../screens/ProductsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PRIMARY_COLOR } from '../constants';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();
const BottmTabNav = createMaterialBottomTabNavigator();

function BottomTabs() {
    return (
        <BottmTabNav.Navigator
            initialRouteName="HomeScreen"
            labeled={false}
            screenOptions={({ route }) => (
                {
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'HomeScreen') {
                            iconName = focused ? 'home' : 'home-outline';
                            color = focused ? PRIMARY_COLOR : 'gray';

                        } else if (route.name === 'ProductsScreen') {
                            iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
                            color = focused ? PRIMARY_COLOR : 'gray';

                        }
                        else if (route.name === 'AboutUsScreen1') {
                            iconName = focused ? 'information' : 'information-outline';
                            color = focused ? PRIMARY_COLOR : 'gray';

                        }
                        else if (route.name === 'AboutScreen') {
                            iconName = focused ? 'information' : 'information-outline';
                            color = focused ? PRIMARY_COLOR : 'gray';

                        }

                        return (
                            <MaterialCommunityIcons
                                name={iconName}
                                color={color}
                                size={30}
                                style={{
                                    height: 40,
                                    width: 30,
                                    borderColor: 'black',
                                    borderWidth: 0,
                                }}
                            />
                        );

                    },
                    headerStyle: {
                        backgroundColor: 'white',
                    },

                })}
            barStyle={{
                backgroundColor: 'white',
                height: 80,
                paddingTop: 10,
                borderColor: 'red',
                borderWidth: 0,
                elevation: 10,
            }}>
            <BottmTabNav.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <BottmTabNav.Screen
                name="ProductsScreen"
                component={ProductsScreen}
                options={{
                    headerShown: false,
                }}
            />
            {/* <BottmTabNav.Screen
                name="AboutUsScreen1"
                component={ProductsScreen}
                options={{
                    headerShown: false,
                }}
            /> */}
            <BottmTabNav.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={{
                    headerShown: false,
                }}
            />
        </BottmTabNav.Navigator>
    )
}


function Navigator(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="AppBottomTabs"
            >
                <Stack.Screen
                    name="AppBottomTabs"
                    component={BottomTabs}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;