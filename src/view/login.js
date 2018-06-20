/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class login extends Component  {
    static navigationOptions = {
        // title : '登录',
        // header : {
        //     visible:false
        // }
    };
    getHttpData = () => {
        alert(1);
        const url = "http://localhost:8000/app/test";
        fetch(url,{
            method:'GET'
        }).then((response)=>response.json()).then((jsonStr) => {});
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.getHttpData}>
                    <Text>加载</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ ()=>navigate('user_center',{
                        id:123
                    })}
                >
                    <Text>登录</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
