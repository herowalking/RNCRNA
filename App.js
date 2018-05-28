import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

//头部公共组件
class HeadScreen extends React.Component {
    render() {
        return (
            <View style={{height:65, backgroundColor:'#242529', padding:10}}>
                <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                    <View style={{flex:1}}>
                        <Text style={{color:'#fff'}}>微信</Text>
                    </View>
                    <View style={{flex:1, alignItems:'flex-end'}}>
                        <Text><Icon name='md-add' color='#fff' size={18} /></Text>
                    </View>
                </View>
            </View>
        )
    }
}

//动态组件
const DynamicScreen = () => (
    <View style={styles.container}>
        <HeadScreen/>
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

//发现组件
const FindScreen = () => (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
        <Text>Find Screen</Text>
    </View>
)

//我的组件
const MyScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My Screen</Text>
    </View>
)


const RootTabs = createMaterialTopTabNavigator(
    {
        Dynamic: {
            screen: DynamicScreen,
            navigationOptions: ({navigation}) => ({
                title: '动态',
                tabBarIcon: ({tintColor}) => (
                    <Icon name='ios-text-outline' size={26} color={tintColor}/>
                )
            }),
        },
        Find: {
            screen: FindScreen,
            navigationOptions: ({navigation}) => ({
                title: '发现',
                tabBarIcon: ({tintColor}) => (
                    <Icon name='ios-bulb-outline' size={26} color={tintColor}/>
                )
            })
        },
        My: {
            screen: MyScreen,
            navigationOptions: ({navigation}) => ({
                title: '我的',
                tabBarIcon: ({tintColor}) => (
                    <Icon name='ios-person-outline' size={26} color={tintColor}/>
                )
            })
        }
    },
    {
        tabBarPosition: 'bottom', //选项卡位置
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#28a745', //选中颜色
            inactiveTintColor: "#232323", //未选中颜色
            //设置选项卡的背景颜色
            style: {
                backgroundColor: '#F2F2F2'
            },
            //去掉安卓点击之后的小黄线
            indicatorStyle: {
                height:0
            },
            //是否显示icon图标
            showIcon: true,
            //选项卡样式
            tabStyle: {
                height:46
            },
            //icon样式
            iconStyle: {
                marginBottom: -6,
                marginTop: 10
            }
        }
    });

//组件样式
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