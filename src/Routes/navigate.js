import React, {Component} from 'react';
import {StackNavigator} from "react-navigation"
import {StyleSheet, Text, View, Button} from 'react-native';

import About from "../components/About";
// import AllContactsScreen "../components/Home"
// import RecentChatsScreen "../components/Home"
import Item from "../components/item"

import ChatScreen from "../components/Chat"

// class RecentChatsScreen extends React.Component {
//   render() {
//     return <Text>List of recent chats</Text>
//   }
// }

// class AllContactsScreen extends React.Component {
//   render() {
//     return <Text>List of all contacts</Text>
//   }
// }

// const MainScreenNavigator = TabNavigator({
//   Recent: { screen: RecentChatsScreen },
//   All: { screen: AllContactsScreen },
// });

class Route extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button onPress={ () => navigate('Chat') } title="Chat with Lucy"/>
            </View>
        );
    }
}

const App = StackNavigator({
    Home: {
        screen: Route 
    },
    // About: {
    //     screen: Home
    // },
    // Item: {
    //     screen: Item
    // },
    Chat: {
        screen: ChatScreen
    }
});

export default (Route, App);