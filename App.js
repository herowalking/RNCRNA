import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

class DetailScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        )
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailScreen
    },
    {
        initialRouteName: 'Details'
    });

export default class App extends React.Component {
    render() {
        return <RootStack/>
    }
}