

import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button, FlatList, Image } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
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
        tableHead: ['Πόλη', 'Πόντοι'],
        tableData: [
          ['Τρίκαλα', '562'],
        ['Αθήνα', '450'],
        ['Θεσσαλονίκη', '343'],
        ['Καβάλα', '314'],
        ['Βόλος', '256'],
        ['Κιλκίς', '208'],
        ['Αλεξανδούπολη', '157'],
        ]
      }
    }
    
  
    render() {
      const state = this.state;
      return (
        <View style={styles.container1}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{
            fontWeight: 'bold', fontSize: 23, paddingBottom: 15, color: 'red',
          }}>Κατάταξη Πόλεων</Text></View>

        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>)
    }
  }

  const styles = StyleSheet.create(
    {
      container1: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
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