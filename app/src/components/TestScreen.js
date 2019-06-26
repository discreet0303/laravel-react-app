import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import ApiCaller from '../ApiCaller';

export default class TestScreen extends Component {

    componentDidMount() {
        (async () => {
            const response = await ApiCaller.get('/api/test');
            if (response.status === 200) {
                console.log(response.data)
            }
        })();
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
