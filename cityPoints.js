import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button, FlatList, Image } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import Icon from "react-native-vector-icons/Ionicons";
import { Table, Row, Rows } from 'react-native-table-component';
 
 
 
export default class cityPoints extends React.Component {
  static navigationOptions = {
    title: 'Κατάταξη',
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
      tableHead: ['Πόλη', 'Πόντοι', 'Movability Aproved'],
      tableData: [
        ['Τρίκαλα', '562', <Image
          style={{ flex: 1, height: undefined, width: undefined }}
          source={{ uri: 'https://zogasmybio.000webhostapp.com/Movability/disabled.png' }}
          resizeMode="contain"
        />],
        ['Αθήνα', '450', <Image
          style={{ flex: 1, height: undefined, width: undefined }}
          source={{ uri: 'https://zogasmybio.000webhostapp.com/Movability/disabled.png' }}
          resizeMode="contain"
        />],
        ['Θεσσαλονίκη', '343', <Image
          style={{ flex: 1, height: undefined, width: undefined }}
          source={{ uri: 'https://zogasmybio.000webhostapp.com/Movability/disabled.png' }}
          resizeMode="contain"
        />],
        ['Καβάλα', '314', ''],
        ['Βόλος', '256', ''],
        ['Κιλκίς', '208', <Image
          style={{ flex: 1, height: undefined, width: undefined }}
          source={{ uri: 'https://zogasmybio.000webhostapp.com/Movability/disabled.png' }}
          resizeMode="contain"
        />],
        ['Καρλόβασι', '172', '']
      ]
    }
  }
 
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container1}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{
            fontWeight: 'bold', fontSize: 23, paddingBottom: 15, color: 'white',
          }}>Κατάταξη Πόλεων</Text></View>
 
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.header} />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
 
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <Text style={styles.header}>"Σφραγίδα Movability Aproved"</Text>
          <Text style={styles.text}>{'\u2022'} Επικύρωση και Έλεγχος για την εγκυρότητα των ραμπών.</Text>
          <Text style={styles.text}>{'\u2022'} Συνεργασία Δήμου με την υπηρεσία Movability.</Text>
        </View>
      </View>
    )
  }
}
 
const styles = StyleSheet.create(
  {
    header: {
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      paddingBottom: 5,
      marginVertical: 15
    },
    container1: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#004d99' },
    head: { height: 40, backgroundColor: 'lightgrey' },
    text: { margin: 6, color: 'white', textAlign: 'center' },
    container: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  });