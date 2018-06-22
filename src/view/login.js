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
    TouchableOpacity,
    TextInput,
    YellowBox,
    Button
} from 'react-native';

YellowBox.ignoreWarnings(['Warning:']);
YellowBox.ignoreWarnings(['T']);
YellowBox.ignoreWarnings(['M']);

// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated in plain JavaScript React classes. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.']);
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
                <Text >饭团扑</Text>
                <View style={styles.loginBox}>
                    <TextInput
                        style={styles.TextInputTop}
                        onChangeText={(text) => this.setState({text})}
                    />
                    <TextInput
                        style={styles.TextInputBottom}
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>

                <TouchableOpacity onPress={this.getHttpData}>
                    <Text>注册</Text>
                </TouchableOpacity>
                <Button
                    // onPress={onPressLearnMore}
                    title="Learn More"
                    color="#841584"

                />;
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
    loginButton : {

    },
    loginBox : {
        shadowOffset: {width: 0, height: 3},shadowColor: '#6d6d6d',shadowOpacity: 1, shadowRadius: 5,shadow
    },
    TextInputTop :{
        height: 40, width: 200,padding:10, borderWidth: 1,
        borderTopLeftRadius:3,
        borderTopRightRadius:3,
        backgroundColor:"#fff",
        borderColor:"#fff",
        borderBottomColor: "#ff7586"
        // shadowOffset: {width: 0, height: 0},shadowColor: '#5db2ff',shadowOpacity: 1, shadowRadius: 5
    },
    TextInputBottom :{
        height: 40, width: 200,padding:10,borderColor: '#fff',
        borderWidth: 1,borderTopWidth :0,borderBottomLeftRadius:3,borderBottomRightRadius:3,
        backgroundColor:"#fff",
        // shadowOffset: {width: 0, height: 0},shadowColor: '#5db2ff',shadowOpacity: 1, shadowRadius: 5
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff7586',
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
