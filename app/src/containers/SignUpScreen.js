import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import ApiCaller from '../ApiCaller';

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: 'aa@ggg.com',
            password: 'aaaaaa',
        }
    }

    handleSignUp = () => {
        console.log('handleSignUp');

        ApiCaller.post('/api/register', {
            name: 'name',
            email: this.state.account,
            password: this.state.password,
            password_confirmation: this.state.password,
        }, {
            baseURL: ApiCaller.getHost(),
            timeout: 10000,
        })
        .then(res => {
            if (res.status === 200) this.props.navigation.navigate('Home');
            console.log(res.data);
        })
        .catch(err => {
            Alert.alert('Error');
        });
    }

    render() {
        return (
            <View style={style.root}>
                {/* <View style={style.inputContainer}>
                    <Text> SignUp Page </Text>
                </View> */}
                <View style={style.inputContainer}>
                    <Text> Account </Text>
                    <TextInput
                        style={style.textinput}
                        onChangeText={account => this.setState({ account })}
                        value={this.state.account}
                    />
                </View>
                <View style={style.inputContainer}>
                    <Text> Password </Text>
                    <TextInput
                        style={style.textinput}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                </View>
                <TouchableOpacity style={style.loginBt} onPress={this.handleSignUp}>
                    <View>
                        <Text style={{color: 'white', fontSize: 20}}> SignUp </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#b0f3ef',
        justifyContent: 'center',
        alignItems: 'center',
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

export default SignUpScreen;