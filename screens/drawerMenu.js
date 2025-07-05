import React from 'react';
import { View, Text, StyleSheet, Settings, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homescreen from './homeScreen';
import primary_color from '../components/colors';
import Sidebar from './sidebarScreen';
import Watchlist from './watchlistScreen';
import Profile from './profileScreen';
import SettingsScreen from './settingsScreen';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Drawer = createDrawerNavigator();

const Drawermenu = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <Sidebar {...props}></Sidebar>}
      screenOptions={{
        headerStyle: {
          backgroundColor: primary_color,
          borderBottomColor: '#E09913',
          borderBottomWidth: 1,
          elevation: 10,
          height: heightPercentageToDP('10%'),
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 25,
          fontFamily: 'Kanit-Regular',
          marginLeft: 10,
        },
        drawerInactiveTintColor: 'white',
        drawerItemStyle: {
          margin: 5,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Homescreen}
        options={{
          drawerActiveTintColor: 'white',
          drawerIcon: ({ size, focused }) => {
            return (
              <Image
                source={require('../assets/images/home.png')}
                style={{
                  height: size,
                  width: size,
                  tintColor: focused ? '#E09913' : '#ffffff',
                }}
              ></Image>
            );
          },
          drawerLabelStyle: { fontFamily: 'Kanit-Light' },
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerActiveTintColor: 'white',
          drawerIcon: ({ size, focused }) => {
            return (
              <Image
                source={require('../assets/images/user.png')}
                style={{
                  height: size,
                  width: size,
                  tintColor: focused ? '#E09913' : '#ffffff',
                }}
              ></Image>
            );
          },
          drawerLabelStyle: { fontFamily: 'Kanit-Light' },
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="Watchlist"
        component={Watchlist}
        options={{
          drawerActiveTintColor: 'white',
          drawerIcon: ({ size, focused }) => {
            return (
              <Image
                source={require('../assets/images/watchlist.png')}
                style={{
                  height: size,
                  width: size,
                  tintColor: focused ? '#E09913' : '#ffffff',
                }}
              ></Image>
            );
          },
          drawerLabelStyle: { fontFamily: 'Kanit-Light' },
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerActiveTintColor: 'white',
          drawerIcon: ({ size, focused }) => {
            return (
              <Image
                source={require('../assets/images/settings.png')}
                style={{
                  height: size,
                  width: size,
                  tintColor: focused ? '#E09913' : '#ffffff',
                }}
              ></Image>
            );
          },
          drawerLabelStyle: { fontFamily: 'Kanit-Light' },
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default Drawermenu;
