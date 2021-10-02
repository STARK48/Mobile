import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from '../consts/colors';

import Icon from 'react-native-vector-icons/Ionicons';



import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';


import EventsScreen from './EventsScreen';
import PlacesScreen from './PlacesScreen';
import BlogScreen from './BlogScreen';




const Tab = createMaterialBottomTabNavigator();

const MainScreen = () => (
<Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: COLORS.primary }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Places"
        component={PlacesScreen}
        options={{
          tabBarLabel: 'Places',
          tabBarIcon: ({ color }) => (
            <Icon name="location-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (
            <Icon name="md-calendar-outline" color={color} size={22} />
          ),
        }}
      />

    <Tab.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          tabBarLabel: 'Blog',
          tabBarIcon: ({ color }) => (
            <Icon name="md-list-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
)

export default MainScreen
