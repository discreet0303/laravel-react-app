import React, { Component } from 'react';
import { 
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

// Screen
import TestScreen from './components/TestScreen';

// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: TestScreen
//     }
// });
// const AppContainer = createAppContainer(AppNavigator);

const TabNavigator = createBottomTabNavigator({
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

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
};