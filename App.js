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

export default createStackNavigator({
    Home: {
        screen: HomeScreen
    }
})