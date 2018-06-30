import React, { Component } from 'react';
import { View, Text, StatusBar, Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };
const lat1 = '0';
const long1 = '0';
 
export default class Navigation extends React.Component {
    static navigationOptions = {
        title: 'Πλοήγηση',
        headerStyle: {
            backgroundColor: '#3366ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
 
        },
    };
    constructor(props) {
        super(props);
        this.state = {
            state: '',
            markers: {
                lat: lat1,
                lng: long1,
            },
            location: {
                latitude: 0,
                longitude: 0
            }
        }
 
    }
 
    componentWillMount() {
        navigator.geolocation.clearWatch(this.watchId);
    }
 
    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    location: position.coords
                });
                console.log("lat + " + JSON.stringify(position.coords))
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, distanceFilter: 1 },
        );
    }
 
 
 
 
    render() {
 
        const GOOGLE_MAPS_APIKEY = ' AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY';
 
        const initialRegion = {
            latitude: 37.3318456,
            longitude: -122.0296002,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
 
        const origin1 = { latitude: 37.941004, longitude: 23.690345 };
        const destination1 = { latitude: 37.941542, longitude: 23.689371 };
        const destination2 = { latitude: 37.941942, longitude: 23.688580 };
        const destination3 = { latitude: 37.942737, longitude: 23.689279 };
        const waypointsArray = [destination2, destination3, destination1];

        var q1dest1 = {latitude: 0, longitude: 0};
        var q1dest2 = {latitude: 0, longitude: 0 };
        var q1dest3 = {latitude: 0, longitude: 0};
        var q1dest4 = {latitude: 0, longitude: 0};
        var q1dest5 = {latitude: 0, longitude: 0};
        var q1dest6 = {latitude: 0, longitude: 0};
        var q1dest7 = {latitude: 0, longitude: 0};
        var quarter1 = [q1dest1,q1dest2,q1dest3,q1dest4,q1dest5,q1dest6,q1dest7];;
 

 

 
        latitude = JSON.stringify(this.state.location.latitude);
        longitude = JSON.stringify(this.state.location.longitude);
   
 
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <View style={{ position: 'absolute', zIndex: 1, backgroundColor: '#fff', width: '100%' }}>
                    <GooglePlacesAutocomplete
                        placeholder='Search'
                        minLength={1}
                        autoFocus={false}
                        returnKeyType={'search'}
                        listViewDisplayed='auto'
                        fetchDetails={true}
                        renderDescription={row => row.description}
                        onPress={(data, details = null) => {
                            //console.log(details.geometry.location);//Επιστροφή συντεταγμενων
                            this.setState({ markers: details.geometry.location });
 
                            if (parseFloat(this.state.markers["lat"]) >= parseFloat(this.state.location['latitude']) && parseFloat(this.state.markers["lng"]) >= parseFloat(this.state.location["longitude"])) {
                                 q1dest1 = {latitude: 37.942029, longitude: 23.695786};
                                 q1dest2 = {latitude: 37.942088, longitude: 23.695864 };
                                 q1dest3 = {latitude: 37.943108, longitude: 23.695623};
                                 q1dest4 = {latitude: 37.943176, longitude: 23.695687};
                                 q1dest5 = {latitude: 37.943293, longitude: 23.697441};
                                 q1dest6 = {latitude: 37.943179, longitude: 23.697594};
                                 q1dest7 = {latitude: 37.943242, longitude: 23.697658};
                                 quarter1 = [q1dest1,q1dest2,q1dest3,q1dest4,q1dest5,q1dest6,q1dest7];
                                console.log("pano deksia");
                            }
                            else if (parseFloat(this.state.markers["lat"]) > parseFloat(this.state.location['latitude']) && parseFloat(this.state.markers["lng"]) < parseFloat(this.state.location["longitude"])) {
                                 q1dest1 = {latitude: 37.942815, longitude: 23.689308};
                                 q1dest2 = {latitude: 37.942914, longitude:  23.689136};
                                 q1dest3 = {latitude: 37.943428, longitude: 23.688181};
                                 q1dest4 = {latitude: 37.943807, longitude: 23.688498};
                                 q1dest5 = {latitude: 37.943856, longitude: 23.688541};
                                 q1dest6 = {latitude: 37.944254, longitude: 23.688879};
                                 q1dest7 = {latitude: 37.944318, longitude: 23.688943};
                                 quarter1 = [q1dest1,q1dest2,q1dest3,q1dest4,q1dest5,q1dest6,q1dest7];
                                 console.log(quarter1);
                                console.log("pano aristera");
                            }
                            else if (parseFloat(this.state.markers["lat"]) < parseFloat(this.state.location['latitude']) && parseFloat(this.state.markers["lng"]) <= parseFloat(this.state.location["longitude"])) {
                                 q1dest1 = {latitude: 37.939456, longitude: 23.696262};
                                 q1dest2 = {latitude: 37.939388, longitude:  23.696340};
                                 q1dest3 = {latitude: 37.93881, longitude: 23.696994};
                                 q1dest4 = {latitude: 37.938747, longitude: 23.697058};
                                 q1dest5 = {latitude: 37.937630, longitude: 23.695636};
                                 q1dest6 = {latitude: 37.937562, longitude: 23.695545};
                                 q1dest7 = {latitude: 37.937499, longitude: 23.695722};
                                 quarter1 = [q1dest1,q1dest2,q1dest3,q1dest4,q1dest5,q1dest6,q1dest7];
                                console.log("kato aristera");
                            }
                            else if (parseFloat(this.state.markers["lat"]) < parseFloat(this.state.location['latitude']) && parseFloat(this.state.markers["lng"]) > parseFloat(this.state.location["longitude"])) {
                                 q1dest1 = {latitude: 37.942815, longitude: 23.689308};
                                 q1dest2 = {latitude: 37.942914, longitude:  23.689136};
                                 q1dest3 = {latitude: 37.943428, longitude: 23.688181};
                                 q1dest4 = {latitude: 37.943807, longitude: 23.688498};
                                 q1dest5 = {latitude: 37.943856, longitude: 23.688541};
                                 q1dest6 = {latitude: 37.944254, longitude: 23.688879};
                                 q1dest7 = {latitude: 37.944318, longitude: 23.688943};
                                 quarter1 = [q1dest1,q1dest2,q1dest3,q1dest4,q1dest5,q1dest6,q1dest7];
                                console.log("kato deksia");
                            }
                            else
                            console.log("gamta");
                        }}
 
                        getDefaultValue={() => ''}
 
                        query={{
                            // available options: https://developers.google.com/places/web-service/autocomplete
                            key: 'AIzaSyD0KipI5sQx8GgqClUgI7yaI8YWNKZRpew',
                            language: 'gr', // language of the results
                            types: 'address' // Εδω πρέπει να μπει το address
                        }}
 
                        styles={{
                            textInputContainer: {
                                width: '100%'
                            },
                            description: {
                                fontWeight: 'bold',
                                zIndex: 2
                            },
                            predefinedPlacesDescription: {
                                color: '#1faadb'
                            }
                        }}
 
                        //currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                        //currentLocationLabel="Current location"
                        //nearbyPlacesAPI='GoogleReverseGeocoding' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                        GoogleReverseGeocodingQuery={{
                            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                        }}
                        GooglePlacesSearchQuery={{
                            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                            rankby: 'distance',
                            types: 'food'
                        }}
 
                        filterReverseGeocodingByTypes={['locality']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                        // predefinedPlaces={[homePlace, workPlace]}
 
                        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                    />
                </View>
                <View style={{ zIndex: 0 }}>
                    <MapView style={{ width: '100%', height: '100%' }} region={{
                        latitude: parseFloat(latitude),
                        longitude: parseFloat(longitude),
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05
                    }}>
 
                        {/*var q1dest1 = {latitude: 0, longitude: 0};
        var q1dest2 = {latitude: 0, longitude: 0 };
        var q1dest3 = {latitude: 0, longitude: 0};
        var q1dest4 = {latitude: 0, longitude: 0};
        var q1dest5 = {latitude: 0, longitude: 0};
        var q1dest6 = {latitude: 0, longitude: 0};
        var q1dest7 = {latitude: 0, longitude: 0};
                        />*/}
                        <StatusBar hidden={true} />
                        <MapView.Marker coordinate={{
                            latitude: parseFloat(this.state.location['latitude']),
                            longitude: parseFloat(this.state.location["longitude"])
                        }} pinColor={"green"} title={"Η τοποθεσία μου"} />
                        <MapView.Marker coordinate={q1dest1} />
                        <MapView.Marker coordinate={q1dest2} />
                        <MapView.Marker coordinate={q1dest3} />
                        <MapView.Marker coordinate={q1dest4} />
                        <MapView.Marker coordinate={q1dest5} />
                        <MapView.Marker coordinate={q1dest6} />
                        <MapView.Marker coordinate={q1dest7} />
                        <MapView.Marker coordinate={{
                            latitude: parseFloat(this.state.markers["lat"]),
                            longitude: parseFloat(this.state.markers["lng"])
                        }} />
                        <MapViewDirections
                            origin={this.state.location}
                            waypoints={quarter1}
                            mode="walking"
                            destination={{
                                latitude: parseFloat(this.state.markers["lat"]),
                                longitude: parseFloat(this.state.markers["lng"])
                            }}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={5}
                            strokeColor="red"
                        />
                        {console.log(this.state.markers)}
                    </MapView>
                </View>
            </View>
        );
    }
 
}