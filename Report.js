import React from 'react';
import { Dimensions, Platform, StyleSheet, Button, View, Text, StatusBar, Picker, Image, TouchableOpacity, Alert } from 'react-native';
import { FlatList } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import { createBottomTabNavigator } from 'react-navigation';


export default class Report extends React.Component {
 
  static navigationOptions = {
    title: 'Αναφορά',
    headerStyle: {
      backgroundColor: '#3366ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      alignSelf: "center",
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      state: '',
      isVisible: true,
      city: '',
      problem: '',
      id: 'r1'

    }
  }


  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  render() {


    return (
      <View style={styles.MainContainer} >

        <Image source={{ uri: 'https://enikioadmin.000webhostapp.com/img/m.png' }} style={{ width: 236, height: 64 }} />
        <Text style={{
          fontWeight: 'bold', fontSize: 23, paddingBottom: 30, paddingTop: 20, color: 'red',
        }}>Φόρμα Aναφοράς Προβλήματος</Text>

        <View style={{ borderBottomColor: '#bbb', borderBottomWidth: 1 }}>
          <Text style={{
            fontWeight: 'bold', fontSize: 20, height: 30, paddingLeft: 10
          }}>Πόλη</Text>
          <Picker
            style={{ width: 300, }}
            selectedValue={this.state.city}
            onValueChange={(lang) => this.setState({ city: lang })}>
            <Picker.Item label="Αθήνα" value="Athens" />
            <Picker.Item label="Θεσσαλονίκη" value="Thessaloniki" />
            <Picker.Item label="Σάμος" value="Samos" />
            <Picker.Item label="Κιλκίς" value="Kilkis" />
          </Picker>
        </View>

        <View style={{ borderBottomColor: '#bbb', borderBottomWidth: 1, paddingTop: 10 }}>
          <Text style={{
            fontWeight: 'bold', fontSize: 20, height: 30, paddingLeft: 10
          }}>Πρόβλημα</Text>
          <Picker
            style={{ width: 300 }}
            selectedValue={this.state.problem}
            onValueChange={(lang) => this.setState({ problem: lang })}>
            <Picker.Item label="Παρκαρισμένο Αυτοκίνητο" value="Parking" />
            <Picker.Item label="Δύσκολη Πρόσβαση" value="Hard" />
            <Picker.Item label="Ανύπαρκτη Ράμπα" value="None" />
          </Picker>
        </View>




        <StatusBar hidden={true} />
        <View style={{
          paddingTop: 40,
          zIndex: -1,
        }}>
          <Button
            title="Αποστολή"
            onPress={() => { console.log('GET', 'https://zogasmybio.000webhostapp.com/ReactAPI/InsertRamps.php?City=' + this.state.city + '&Problem=' + this.state.problem + '&id=' + this.state.id)}}
          />

        </View>
       
      </View>
    );
  }

}
const styles = StyleSheet.create(
  {
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    map: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    MainContainer:
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
  });









const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});