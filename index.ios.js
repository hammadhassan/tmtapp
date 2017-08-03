import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';
import Main from "./src/Main";
import { StackNavigator } from 'react-navigation';

// const styles = StyleSheet.create({
// });

AppRegistry.registerComponent('tmapp', () => Main);
