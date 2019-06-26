import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class TestScreen extends Component {
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
