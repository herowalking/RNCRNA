import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }
    render() {
        return (
            <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title='Go to details'
                    /* 1. Navigate to the Details route with params  */
                    onPress={() => this.props.navigation.navigate('Detail', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
            </View>
        );
    }
}

class DetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Details'
    }
    render() {
        /* 2. Get the param, provide a fallback value if not available */
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParm', 'some default value');

        return (
            <View styles={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                <Text>Deatil Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title='Go go detail... again'
                    onPress={() => this.props.navigation.push('Detail', {
                        itemId: Math.floor(Math.random() * 100)
                    })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title='popToTop'
                    onPress={() => this.props.navigation.popToTop()}
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