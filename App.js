import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import DynamicScreen from './components/Wechat/DynamicScreen';
import ContactScreen from './components/Wechat/ContactScreen';
import FindScreen from './components/Wechat/FindScreen';
import MyScreen from './components/Wechat/MyScreen';

const RootTabs = createMaterialTopTabNavigator(
    {
        Dynamic: {
            screen: DynamicScreen,
        },
        Contact: {
            screen: ContactScreen,
        },
        Find: {
            screen: FindScreen,
        },
        My: {
            screen: MyScreen,
        }
    },
    {
        initialRouteName: 'Contact',
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

export default RootTabs;