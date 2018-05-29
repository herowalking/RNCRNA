import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title='Go to details'
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </View>
        );
    }
}

class DetailScreen extends React.Component {
    render() {
        return (
            <View styles={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                <Text>Deatil Screen</Text>
                <Button
                    title='Go go detail... again'
                    onPress={() => this.props.navigation.push('Detail')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Detail: {
            screen: DetailScreen,
        },

    },
    {
        initialRouteName: 'Home',
    });

export default class App extends React.Component {
    render() {
        return <RootStack/>
    }
}