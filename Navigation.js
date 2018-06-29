import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import MapViewDirections from 'react-native-maps-directions';
import { StatusBar } from 'react-native';




export default class Navigation extends React.Component {
    static navigationOptions = {
        title: 'Ανακατεύθυνση',
        headerStyle: {
            backgroundColor: '#3366ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',

        },
    };

    render() {
       
       //KAINOYRGIO KLEIDI AIzaSyD0KipI5sQx8GgqClUgI7yaI8YWNKZRpew
        const GOOGLE_MAPS_APIKEY = ' AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY';

        const initialRegion = {
            latitude: 37.3318456,
            longitude: -122.0296002,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }

        const origin1 = { latitude: 37.3318456, longitude: -122.0296002 };
        const destination1 = { latitude: 37.771707, longitude: -122.4053769 };
        const destination2 = { latitude: 37.77222, longitude: -122.2222222 };
        const destination3 = { latitude: 37.22222, longitude: -122.2222222 };
        const waypointsArray = [destination2, destination1];
        return (
            <MapView initialRegion={initialRegion} style={StyleSheet.absoluteFillObject}>
                <StatusBar hidden={true} />
                <MapView.Marker coordinate={origin1} />
                <MapView.Marker coordinate={destination1} />
                <MapView.Marker coordinate={destination2} />
                <MapView.Marker coordinate={destination3} />
                <MapViewDirections
                    origin={origin1}
                    waypoints={waypointsArray}
                    destination={destination3}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                />
            </MapView>
        );
    }
}