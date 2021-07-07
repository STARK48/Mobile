import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View ,SafeAreaView, StyleSheet,Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';


import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';


const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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





const App = () =>{
  return (

  <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Detail" component={DetailStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>);
}

export default App
