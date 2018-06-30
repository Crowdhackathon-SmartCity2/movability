import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, StatusBar, Alert } from 'react-native';
import { Button, FlatList, ScrollView, Picker } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
 
 
export default class InsertRamp extends React.Component {
  static navigationOptions = {
    title: 'Νέα Ράμπα',
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
        latitude: 37.34297952169793,
        longitude: -122.00497459620237,
      },
      location: {
        latitude: 0,
        longitude: 0
      },
      language: '',
      problem: '',
      perigrafi: '',
      City: '3'
    }
    this.problem =
      {
      }
 
  }
 
 
  componentDidMount() {
    this.watchId = navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          location: position.coords
        });
        console.log("lat + " + JSON.stringify(position.coords))
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true},
    );
  }
 
  render() {
 
    //KAINOYRGIO KLEIDI AIzaSyD0KipI5sQx8GgqClUgI7yaI8YWNKZRpew
    const GOOGLE_MAPS_APIKEY = ' AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY';
 
    const initialRegion = {
      latitude: 37.3318456,
      longitude: -122.0296002,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
 
    latitude = JSON.stringify(this.state.location.latitude);
    longitude = JSON.stringify(this.state.location.longitude);
   
 
    var request = new XMLHttpRequest();
    return (
      <ScrollView  contentContainerStyle={{ alignItems: 'center', flex: 1, paddingTop: 10, backgroundColor: '#004d99', width: '100%' }}>
        <Text style={{
          fontWeight: 'bold', fontSize: 23, paddingBottom: 15, color: 'white',
        }}>Εισάγετε μία νέα ράμπα</Text>
       
 
        <MapView region={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.03,
          longitudeDelta: 0.03
        }} style={{ width: '100%', height: '40%', paddingBottom: 10 }} onPress={e => this.setState({ location: e.nativeEvent.coordinate })}>
    {
          <MapView.Marker
            key="0"
            coordinate={{
              latitude: parseFloat(this.state.location['latitude']),
              longitude: parseFloat(this.state.location["longitude"])
            }}
            title={"Η τοποθεσία μου"}
            pinColor={"coral"}
          />
          }
        </MapView>
 
<ScrollView >
        <View style={{ borderBottomColor: '#bbb', borderBottomWidth: 1 }}>
          <Text style={{
            fontWeight: 'bold', fontSize: 20, height: 25, paddingLeft: 10, color: 'white'
          }}>Πόλη</Text>
         
          <Picker
            style={{ width: 300, color: 'lightgrey' }}
            selectedValue={this.state.City}
            onValueChange={(lang) => this.setState({ City: lang })}>
            <Picker.Item label="Αθήνα" value="Athens" />
            <Picker.Item label="Θεσσαλονίκη" value="Thessaloniki" />
            <Picker.Item label="Σάμος" value="Samos" />
            <Picker.Item label="Κιλκίς" value="Kilkis" />
          </Picker>
        </View>
 
        <View style={{ borderBottomColor: '#bbb', borderBottomWidth: 1, paddingTop: 10 }}>
          <Text style={{
            fontWeight: 'bold', fontSize: 20, height: 25, paddingLeft: 10, color: 'white'
          }}>Τύπος</Text>
          <Picker
            style={{ width: 300, color: 'lightgrey' }}
            selectedValue={this.state.problem}
            onValueChange={(lang) => this.setState({ problem: lang })}>
            <Picker.Item label="Ράμπα" value="Ramp" />
            <Picker.Item label="Στάθμευση" value="Parking" />
          </Picker>
        </View>
        <View style={{ borderBottomColor: '#bbb', borderBottomWidth: 1, paddingTop: 10, width: '85%' }}>
          <Text style={{
            fontWeight: 'bold', fontSize: 20, height: 28, paddingLeft: 10, color: 'white'
          }}>Περιγραφή</Text>
          <View style={styles.textAreaContainer} >
 
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder={"Type something"}
              placeholderTextColor={"lightgrey"}
              numberOfLines={4}
              multiline={true}
              onChangeText={(lang) => this.setState({ perigrafi: lang })}
            />
          </View>
        </View>
        <StatusBar hidden={true} />
        <View style={{
          paddingTop: 10,
          paddingBottom: 30,
          zIndex: -1,
        }}>
          <Button
            title={"Εισαγωγή"}
            onPress={() => { request.open('GET', 'https://zogasmybio.000webhostapp.com/ReactAPI/InsertRamps.php?typos=' + this.state.problem + '&perigrafi=' + this.state.perigrafi + '&long=' + this.state.markers["latitude"] + '&lat=' + this.state.markers["longitude"] + '&city=' + this.state.City); request.send(); Alert.alert(
              'Επιτυχής Υποβολή',
              'Η υποβολή της ράμπας έχει γίνει με επιτυχία.',
              [
                {text: 'OK', onPress: this.onDeleteBTN},
              ],
              { cancelable: false }
            ) }}
          />
        </View>
        </ScrollView>
 
      </ScrollView>
 
    );
  }
 
}
 
const styles = StyleSheet.create(
  {
    textAreaContainer: {
      borderColor: '#DCDCDC',
      borderWidth: 1,
      padding: 5
    },
    textArea: {
      height: 70,
      justifyContent: "flex-start"
    }
});