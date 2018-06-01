import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./images/spiro.png')}
                style={{ width:30, height:30 }}
            />
        )
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle:<LogoTitle/>
    };
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
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
            headerStyle:{
                backgroundColor:navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
        }
    };
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
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({otherParam:'Updated!'})}
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
        navigationOptions: {
            headerStyle:{
                backgroundColor:'#f4511e'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'bold'
            }
        }
    });

export default class App extends React.Component {
    render() {
        return <RootStack/>
    }
}