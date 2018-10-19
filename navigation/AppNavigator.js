import React from 'react';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'expo';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import InfoScreen from '../screens/InfoScreen';
import TaskScreen from '../screens/TaskScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import { LogoHeader, BtnProfile, BtnBackProfile } from '../components'

const AuthStackNavigator = createStackNavigator({
  Login: LoginScreen
});

const AppTabNavigator = createBottomTabNavigator({
	Home: HomeScreen,
  // Info: InfoScreen,
  Task: TaskScreen,
  // Schedule: ScheduleScreen
}, {
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        // if (routeName === 'Home') {
        //   iconName = `ios-apps${focused ? '' : '-outline'}`;
        // } else if (routeName === 'Profile') {
        //   iconName = `ios-options${focused ? '' : '-outline'}`;
        // } else if (routeName === 'Task') {
        //   iconName = `ios-list-box${focused ? '' : '-outline'}`;
        // } else if (routeName === 'Info') {
        //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        // } else if (routeName === 'Schedule') {
        //   iconName = `ios-calendar${focused ? '' : '-outline'}`;
        // }

        if (routeName === 'Home') {
          iconName = `ios-apps${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Task') {
          iconName = `ios-list-box${focused ? '' : '-outline'}`;
        }

        return <Icon.Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#f2e4be',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#0f1c42',
      }
    },
});

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
  	screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <LogoHeader />,
      headerStyle: {
        backgroundColor: '#0f1c42'
      },
      headerRight: <BtnProfile nav={navigation} />,
      headerRightContainerStyle: {
        paddingRight: 20,
      }
    })
  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Profile',
      headerStyle: {
        backgroundColor: '#0f1c42',
      },
      headerTitleStyle: {
        color: '#f2e4be',
      },
      headerLeft: <BtnBackProfile nav={navigation} />,
      headerLeftContainerStyle: {
        paddingLeft: 15,
      }
    })
  },
});

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppStackNavigator,
  Profile: ProfileStack,
});
