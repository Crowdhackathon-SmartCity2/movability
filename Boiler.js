import React, { Component } from "react";
import {AppRegistry, Dimensions, Platform, StyleSheet, Button, View, Text, StatusBar, Picker, Image, TouchableOpacity, Alert } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { Marker } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import { Table, Row, Rows } from 'react-native-table-component';
import Map from './Map';
import Navigation from './Navigation';
import cityPoints from './cityPoints.js';
import Report from './Report';
import InsertRamp from './insertRamp';
import { StackNavigator } from "react-navigation";

class App extends React.Component {
     
  render() {
   
    return (

      <View>        
        <Report />
        <Navigation />
        <Map />
        <cityPoints />
        <insertRamp/>
      </View>
    )
  }
}

export default createBottomTabNavigator(
  {
    Map: Map,
    Report: Report,
    Navigation: Navigation,
    cityPoints: cityPoints,
    InsertRamp: InsertRamp
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'cityPoints') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Report') {
          iconName = `ios-warning${focused ? '' : '-outline'}`;
        } else if (routeName === 'Navigation') {
          iconName = `ios-compass${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Map') {
          iconName = `ios-map${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'InsertRamp') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#004d99',
      inactiveTintColor: 'gray',
      visible: false
    },
  }
);


AppRegistry.registerComponent("Boiler", () => Boiler);
