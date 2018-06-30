import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet, // CSS-like styles
    Text, // Renders text
    View, // Container component
    Image
} from "react-native";
 
import Icon from "react-native-vector-icons/Ionicons";
import { StackNavigator } from "react-navigation";
 
import Swiper from "./Swiper";
 
export default class Screen extends Component {
    render() {
        return (
 
            <Swiper navigation={this.props.navigation}>
                {/* Splash screen */}
                <View style={styles.slide}>
                    <Image source={{ uri: 'https://enikioadmin.000webhostapp.com/img/m.png' }}
                        style={{ width: '70%', height: '20%', resizeMode: 'contain' }} />
                    <Text style={styles.text}>Movability v 1.0</Text>
                </View>
                {/* First screen */}
                <View style={styles.slide}>
                    <Icon name="ios-map" {...iconStyles} />
                    <Text style={styles.header}>Χάρτης Ραμπών ΑμΕΑ</Text>
                    <Text style={styles.text}>Βρείτε στον χάρτη για κάθε δήμο τοποθεσίες καθώς και άλλες πληροφορίες για τις μπάρες για ΑμΕΑ.</Text>
                </View>
                {/* Second screen */}
                <View style={styles.slide}>
                    <Icon name="ios-compass" {...iconStyles} />
                    <Text style={styles.header}>Εύρεση Διαδρομής</Text>
                    <Text style={styles.text}>Βρέιτε την καλυτερη διαδρομή απο την τοποθεσία σας προς μία άλλη τοποθεσία μέσα απο βοηθητικές ράμπες για ΑμΕΑ.</Text>
                </View>
                {/* Third screen */}
                <View style={styles.slide}>
                    <Icon name="ios-add-circle" {...iconStyles} />
                    <Text style={styles.header}>Εισαγωγή Ραμπών</Text>
                    <Text style={styles.text}>Προσθέστε ράμπες στην περιοχή σας με σκοπό την βοήθεια σας καθώς και άλλων ανθρώπων με κινητικά προβλήματα.</Text>
                </View>
                <View style={styles.slide}>
                    <Icon name="ios-warning" {...iconStyles} />
                    <Text style={styles.header}>Αναφορά Ραμπών</Text>
                    <Text style={styles.text}>Εύκολία αναφορών για κάποιο πρόβλημα σε ράμπα.</Text>
                </View>
            </Swiper>
        );
    }
}
const iconStyles = {
    size: 100,
    color: "#FFFFFF"
};
const styles = StyleSheet.create({
    // Slide styles
    slide: {
        flex: 1, // Take up all screen
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        backgroundColor: "#004d99"
    },
    // Header styles
    header: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 15
    },
    // Text below header
    text: {
        color: "#FFFFFF",
        fontSize: 18,
        marginHorizontal: 40,
        textAlign: "center"
    }
});
//AppRegistry.registerComponent("Screen", () => Screen);