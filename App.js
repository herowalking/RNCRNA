import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                <Text>Home</Text>
            </View>
        )
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                <Text>Settings!</Text>
            </View>
        )
    }
}

export default createMaterialTopTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen
});