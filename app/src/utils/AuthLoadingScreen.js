import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import ApiCaller from '../ApiCaller';

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const accessToken = await AsyncStorage.getItem('access_token');

        if (!accessToken) this.props.navigation.navigate('Auth');
        else {
            ApiCaller.get('/api/getUsers', {
                baseURL: ApiCaller.getHost(),
                timeout: 10000,
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            .then(res => {
                if (res.status === 200) this.props.navigation.navigate('App');
                else this.props.navigation.navigate('Auth');
            })
            .catch(err => {
                console.log(err);
                this.props.navigation.navigate('Auth');
            });
        }
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        // this.props.navigation.navigate(accessToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size='large'/>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}