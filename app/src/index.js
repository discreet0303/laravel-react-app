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
import SignInScreen from './containers/SignInScreen';
import SignUpScreen from './containers/SignUpScreen';

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
        screen: SignInScreen,
        params: { text: 'SignIn Screen' },
        navigationOptions: {
            header: null,
        }
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            header: null,
        }
    }
}, {
    initialRouteName: 'SignIn',
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