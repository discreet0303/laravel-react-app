import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

export default class TestScreen extends Component {

    handleLogout = async () => {
        console.log('handleLogout');
        await AsyncStorage.removeItem('access_token');
        this.props.navigation.navigate('Auth');
    }

    render() {
        const { text } = this.props.navigation.state.params;
        return (
            <View style={styles.root}>
                <Text>
                    {
                        text ? text : 'This is the init testing screen'
                    }
                </Text>
                <TouchableOpacity onPress={this.handleLogout}>
                    <View style={{ height: 40, borderWidth: 2, width: '70%' }}><Text>Logout</Text></View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
