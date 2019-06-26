import React, { Component } from 'react';
import { 
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

// Screen
import TestScreen from './components/TestScreen';

import AuthLoadingScreen from './utils/AuthLoadingScreen';

const AppStack = createBottomTabNavigator({
    Home: {
        screen: TestScreen,
        params: { text: 'Home Screen' }
    },
    Camera: {
        screen: TestScreen,
        params: { text: 'Camera Screen' }
    },
    Settings: {
        screen: TestScreen,
        params: { text: 'Setting Screen' }
    },
});

const AuthStack = createStackNavigator({ 
    SignIn: {
        screen: TestScreen,
        params: { text: 'Auth Screen' }
    },
});


const AuthFlows = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
}, {
    initialRouteName: 'AuthLoading',
});

const AppContainer = createAppContainer(AuthFlows);
export default class App extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
};