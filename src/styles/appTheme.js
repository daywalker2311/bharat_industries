import { DefaultTheme, DarkTheme, configureFonts } from 'react-native-paper';
//import * as AppColor from '../constants/Colors';

export const AppLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        header: 'white',
        primary: '#0b328d',
        bottomTab: 'white',
    }
}

export const AppDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        header: '#272627',
        primary: '#4d96fb',
        bottomTab: '#272627',

    },
    mapDarkStyle,
}
const mapDarkStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#181818"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1b1b1b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8a8a8a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#373737"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3c3c3c"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3d3d3d"
            }
        ]
    }
]

const fontConfig = {
    default: {
        regular: {
            fontFamily: 'Roboto-Regular',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'Roboto-Medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'Roboto-Light',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'Roboto-Thin',
            fontWeight: 'normal',
        },
        black: {
            fontFamily: 'Roboto-Black',
            fontWeight: 'normal',
        },
        bold: {
            fontFamily: 'Roboto-Bold',
            fontWeight: 'normal',
        },
    },
};

// var otherTheme = {
//     ...DefaultTheme,
//     colors: {
//         ...DefaultTheme.colors,
//         header: '#272627',
//         accent: AppColor.ACCENT,
//         accentSecondary: AppColor.ACCENT_SECONDARY,
//         primary: AppColor.PRIMARY, //blueish- ex: button's background color
//         primarySecondary: AppColor.PRIMARY_SECONDARY,
//         error: AppColor.ALERT,
//         errorSecondary: AppColor.ALERT_SECONDARY,
//         black: AppColor.BLACK,
//         grey: AppColor.GRAY_DARK,
//         white: AppColor.WHITE,
//         onSurface: 'red',
//     },
//     fonts: configureFonts(fontConfig),
// };