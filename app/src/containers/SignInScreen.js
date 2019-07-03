import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import ApiCaller from '../ApiCaller';

class SignInScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account: 'qqq@qq.com2',
            password: 'aaaaaa'
        }
    }

    handleLogin = () => {
        // ApiCaller.get('/api/getUsers', {
        //     baseURL: ApiCaller.getHost(),
        //     timeout: 100000,
        //     headers: { Authorization: token }
        // })
        // .then(res => {
        //     console.log(res)
        // })
        // .catch(err => console.log(err));

        ApiCaller.post('/api/login', {
            email: this.state.account,
            password: this.state.password
        }, {
            baseURL: ApiCaller.getHost(),
            timeout: 10000
        })
        .then(async res => {
            console.log(res.data)
            if (res.status == 200) {
                await AsyncStorage.setItem('access_token', res.data.access_token);
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <View style={style.root}>
                <View style={{ height: 350, alignItems: 'center' }}>
                    <View style={style.inputContainer}>
                        <Text> Account </Text>
                        <TextInput
                            style={style.textinput}
                            onChangeText={(account) => this.setState({account})}
                            value={this.state.account}
                        />
                    </View>
                    <View style={style.inputContainer}>
                        <Text> Password </Text>
                        <TextInput
                            style={style.textinput}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                        />
                    </View>
                    <TouchableOpacity style={style.loginBt} onPress={this.handleLogin}>
                        <View>
                            <Text style={{color: 'white', fontSize: 20}}> Login </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.loginBt} onPress={() => this.props.navigation.navigate('SignUp')}>
                        <View>
                            <Text style={{color: 'white', fontSize: 20}}> SignUp </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#b0f3ef',
        justifyContent: 'flex-end',
    },
    inputContainer: {
        width: '70%',
    },
    textinput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        marginTop: 5,
        marginBottom: 10,
        paddingHorizontal: 5,
        borderRadius: 10,
    },
    loginBt: {
        height: 40,
        width: '70%',
        flexDirection: 'row',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        // borderColor: 'blue',
        // borderWidth: 2,
    }
});

export default SignInScreen;