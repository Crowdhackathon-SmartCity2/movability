import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';

export default class Map extends React.Component {


  watchID = null;


  state = {
    text: "",
    location: {
      latitude: 0,
      longitude: 0
    },
    errorMessage: null,
    /*Εδώ θα είναι το state των markers σε έναν αρχικά κενό πίνακα 
    που θα το γεμίζουμε καλώντας το api με το xml που θα μετατρέπουμε σε json*/
    rampMarkers: [],
    parkingMarkers: [],
    error: null

  };


  componentWillMount() {

    /*fetch('http://zogasmybio.000webhostapp.com/myxmlTest.xml')
              .then(response => response.json())
              .then(({ results: markers }) => this.setState({ markers }))*/

    fetch('http://zogasmybio.000webhostapp.com/data.json')
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson.data.ramps)
        this.setState({
          rampMarkers: responseJson.data.ramps.ramp,
          parkingMarkers: responseJson.data.park_seats.park_seat
        });
      }).catch((err) => {
        console.log('fetch', err)
      })


    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      //this._getLocationAsync();
    }

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



  /* Η μέθοδος όπου ζητάμε τα δικαιώματα από τον χρήστη για να ανοίξει ο χάρτης*/
  /*_getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    /* Βάζουμε σε μία μεταβλητή loation την τοποθεσία του χρήστη που παίρνουμε από το gps της συσκευής του */
  /* let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
   this.setState({ location });


};*/


  render() {


    let latitude = 0;
    let longitude = 0;
    let coords;

    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {

      /* Από το location παιρνάμε τις συντεταγμένες σε 2 μεταβλητές */
      latitude = JSON.stringify(this.state.location.latitude);
      longitude = JSON.stringify(this.state.location.longitude);

      //coords = JSON.parse(this.state.location);
      //console.log("coords" + coords);



    }

    //let arrayjson= this.state.markers["ramp"];


    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
        >
          {/*ΕΔΩ ΤΟ ΜΑΡΚΕΡ ΓΙΑ ΤΗΝ ΤΟΠΟΘΕΣΙΑ ΤΟΥ ΧΡΗΣΤΗ*/}
          <MapView.Marker
            key={"0"}
            coordinate={{
              latitude: parseFloat(this.state.location['latitude']),
              longitude: parseFloat(this.state.location["longitude"])
            }}
            title={"Η τοποθεσία μου"}
            pinColor={"green"}
          />

          {/* ΕΔΩ ΤΑ ΜΑΡΚΕΡ ΓΙΑ ΤΙΣ ΡΑΜΠΕΣ*/}
          {this.state.rampMarkers.map(marker => (
            <MapView.Marker
              key={marker["-ID"]}
              coordinate={{
                latitude: parseFloat(marker["latitude"]),
                longitude: parseFloat(marker["longitude"])
              }}
              title={"Ράμπα"}
              description={"Δυσκολία: " + marker["difficultness"]}
              pinColor={"coral"}
            />
          ))}
          {/* ΕΔΩ ΤΑ ΜΑΡΚΕΡ ΓΙΑ ΤΙΣ ΘΕΣΕΙΣ ΠΑΡΚΙΝΚ*/}
          {this.state.parkingMarkers.map(marker => (
            <MapView.Marker
              key={marker["-ID"]}
              coordinate={{
                latitude: parseFloat(marker["latitude"]),
                longitude: parseFloat(marker["longitude"]),
              }}
              title={"Θέση πάρκινγκ"}
              pinColor={"lightblue"}
            />
          ))}



        </MapView>

        <Text>Latitude: {latitude}</Text>
        <Text>Longitude: {longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
} const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
