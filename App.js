import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

const HomeScreen = () => (
    <View style={styles.container}>
        <Text style={styles.news}>新闻列表</Text>
        <FlatList
            data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Lincoln'},
                {key: 'Jimmy'},
                {key: 'Kate'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
        <Text>Profile Screen</Text>
    </View>
)

const MyScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My Screen</Text>
    </View>
)


const RootTabs = createMaterialTopTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                title: '动态',
            }),
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                title: '资料'
            })
        },
        My: {
            screen: MyScreen,
            navigationOptions: ({navigation}) => ({
                title: '我的'
            })
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#28a745',
            inactiveTintColor: "#232323",
            style: {
                backgroundColor: '#F2F2F2'
            },
            indicatorStyle: {
                height:0
            }
        }
    });

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: '#232323',
    },
    news: {
        fontSize:20,
        paddingLeft:10,
        borderBottomColor:'#dadada',
        borderBottomWidth:1,
        justifyContent: 'center'
    }
});

export default RootTabs;