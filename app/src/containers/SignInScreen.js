import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

class SignInScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account: '',
            password: ''
        }
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
                    <TouchableOpacity style={style.loginBt}>
                        <View>
                            <Text style={{color: 'white', fontSize: 20}}> Login </Text>
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