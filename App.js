import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class JustifyContentBasics extends Component {
    render() {
        return (
            // 尝试把`row`改为`column`看看
            <View style={{flex:1, flexDirection:'column', justifyContent:'flex-end'}}>
                <View style={{width:50, height:50, backgroundColor:'powderblue'}} />
                <View style={{width:50, height:50, backgroundColor:'skyblue'}} />
                <View style={{width:50, height:50, backgroundColor:'steelblue'}} />
            </View>
        )
    }
}