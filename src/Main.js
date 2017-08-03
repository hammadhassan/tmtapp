import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Route from './Routes/navigate';
import styles from "./css/styles";

class Main extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.navbar}>
                    <View style={styles.navbarButton}></View>
                    <Text style={styles.navbarTitle}>Main</Text>
                    <Text style={styles.navbarButton}>Search</Text>
                </View>
                <View>
                    <Text style={styles.content}>
                        Native App by Hammad Hassan
                    </Text>
                </View>
                    <Route />
            </View>
        );
    }
}

// const styles = StyleSheet.create({
  
// });

export default Main;