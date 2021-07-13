import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';


import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import NotificationsScreen from './NotificationsScreen';


const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ChatStack = createStackNavigator();
const NotificationsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainScreen = () => (
<Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#009387' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Detail',
          tabBarIcon: ({ color }) => (
            <Icon name="list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStackScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Icon name="mail" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Notifications"
        component={NotificationsStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
)



const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions={
      {
        headerStyle:{
          backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold',
  
        }
      }
    }>
      <HomeStack.Screen name="Home" component={HomeScreen} options={
        {
          title:'Welcome',
          headerLeft:() => (
            <Icon.Button
            name="ios-menu" size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
          headerRight:() => (
            <Icon.Button
            name="qr-code-sharp" size={25}
            backgroundColor="#009387"
            //onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          )
        }
      }/>    
    </HomeStack.Navigator>
  );
  
  const DetailStackScreen = ({navigation}) => (
    <DetailStack.Navigator screenOptions={
      {
        headerStyle:{
          backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold',
  
        }
      }
    }>
      <DetailStack.Screen name="Detail" component={DetailScreen}  options={
        {
          
          headerLeft:() => (
            <Icon.Button
            name="ios-menu" size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          )
        }
      } />    
    </DetailStack.Navigator>
  )
  
  
  const ChatStackScreen = ({navigation}) => (
    <ChatStack.Navigator screenOptions={
      {
        headerStyle:{
          backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold',
  
        }
      }
    }>
      <ChatStack.Screen name="Chat" component={ChatScreen}  options={
        {
          
          headerLeft:() => (
            <Icon.Button
            name="ios-menu" size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          )
        }
      } />    
    </ChatStack.Navigator>
  )
  
  const NotificationsStackScreen = ({navigation}) => (
    <NotificationsStack.Navigator screenOptions={
      {
        headerStyle:{
          backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold',
  
        }
      }
    }>
      <NotificationsStack.Screen name="Notifications" component={NotificationsScreen}  options={
        {
          
          headerLeft:() => (
            <Icon.Button
            name="ios-menu" size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          )
        }
      } />    
    </NotificationsStack.Navigator>
  )

export default MainScreen
